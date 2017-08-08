import tensorflow as tf
import gym
# from gym import wrappers
import numpy as np
import time

from tensorflow.contrib import layers

GAMMA = 0.99
env_name = "CartPole-v0"
logPath = '/tmp/cartpole-experiment-1'
apiKey = 'sk_Cw5T7JD1RY2u6Gn4DVTjw'


def build_policy(input_state, num_actions):
    with tf.name_scope("policy"):
        out = layers.flatten(input_state)
        out = layers.fully_connected(out, num_outputs=32, activation_fn=tf.nn.relu)
        out = layers.fully_connected(out, num_outputs=num_actions, activation_fn=None)
        out = layers.softmax(out)
    return out

def main():
    env = gym.make(env_name)
    # env = wrappers.Monitor(env, logPath)
    seed = 42 #the answer for biggest question in the universe, why not :)

    env.seed(seed)
    tf.set_random_seed(seed)
    np.random.seed(seed)

    episode_count = 1000000
    max_steps = 100000

    def get_step_size(t):
        base_step_size = 0.001
        return base_step_size / ((t + 1) ** 0.5)

    num_actions = env.action_space.n
    input_state_shape = list(env.observation_space.shape)
    input_state_ph = tf.placeholder(dtype=tf.float32, shape=[None] + input_state_shape)
    policy = build_policy(input_state_ph, num_actions)

    trainable_vars = tf.trainable_variables()

    def select(data, indices):
        return tf.reduce_sum(data * tf.one_hot(indices, 2, axis=-1), axis=1)

    step_size_ph = tf.placeholder(dtype=tf.float32, shape=[])
    action_ph = tf.placeholder(dtype=tf.int32, shape=[None])
    discounted_return_ph = tf.placeholder(dtype=tf.float32, shape=[None])
    action_log_policy = select(tf.log(policy), action_ph)
    gradients = tf.gradients(tf.reduce_sum(step_size_ph * discounted_return_ph * action_log_policy), trainable_vars)

    update_vars_ops = []
    for var, grad in zip(trainable_vars, gradients):
        update_vars_ops.append(tf.assign_add(var, grad))
    update_vars = tf.group(*update_vars_ops)

    with tf.train.SingularMonitoredSession() as session:
        start_time = time.clock()
        total_frames = 0
        for episode in range(episode_count):
            state = env.reset()

            states = []
            actions = []
            rewards = []

            total_reward = 0
            total_rewards = []

            show_episode = episode % 100 == 0

            for step in range(max_steps):
                if show_episode:
                    env.render()

                probs = policy.eval(session=session, feed_dict={input_state_ph: [state]})[0]
                action = np.random.choice(num_actions, p=probs)

                next_state, reward, is_terminal, info = env.step(action)
                states.append(state)
                actions.append(action)
                rewards.append(reward)

                total_reward += reward
                if is_terminal:
                    total_frames += step
                    total_rewards.append(total_reward)
                    if episode % 100 == 0:
                        total_rewards = total_rewards[-100:]
                        print("ep: {}, avg: {}, fps: {}".format(
                            episode,
                            np.mean(total_rewards),
                            total_frames / (time.clock() - start_time)))

                        states = np.array(states)
                        actions = np.array(actions)
                        discounted_returns = np.array(rewards)
                        for i in range(len(discounted_returns) - 2, 0, -1):
                            discounted_returns[i] += GAMMA * discounted_returns[i + 1]

                        session.run([update_vars], feed_dict={
                            input_state_ph: states,
                            action_ph: actions,
                            discounted_return_ph: discounted_returns,
                            step_size_ph: get_step_size(episode),
                            })
                        break
                    else:
                        state = next_state

if __name__ == "__main__":
    main()

# env.close()
# gym.upload(logPath, api_key=apiKey)
