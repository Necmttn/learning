import gym
from gym import wrappers

logPath = '/tmp/cartpole-experiment-1'
apiKey = 'sk_Cw5T7JD1RY2u6Gn4DVTjw'
env = gym.make('CartPole-v0')
env = wrappers.Monitor(env, logPath)
for i_episode in range(120):
    observation = env.reset()
    for t in range(100):
        env.render()
        print(observation)
        action = env.action_space.sample()
        observation, reward, done, info = env.step(action)
        if done:
            print("Episode finished after {} timesteps".format(t+1))
            break
env.close()
gym.upload(logPath, api_key=apiKey)
