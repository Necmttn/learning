import gym
import random
import numpy as np
import tflearn
from tflearn.layers.core import input_data, dropout, fully_connected
from tflearn.layers.estimator import regression
from statistics import median, mean
from collections import Counter

Lr = 1e-3
env = gym.make("CartPole-v0")
env.reset()
goal_steps = 500
score_requirement = 50
initial_games = 10000

def some_random_games_first():
    # Eact of these is its own games.
    for episode in range(5):
        env.reset()
        # this is each frame, up to 200... but we wont make it that far.
        for t in range(200):
            # this will display the enviroment
            # only display if you really want to see it
            # takes much longer to display it.
            env.render()

            # this will create a sample action in any environment.
            # in this environment, the action can be 0 or 1, which is left and right.
            action = env.action_space.sample()

            # this executes the environment with an action,
            # and returns the observation of the environment,
            # the reward, if the env is over, and other info.
            observation, reward, done, info = env.step(action)
            if done:
                break


# some_random_games_first()


def initial_population():
    # [OBS , MOVES]
    training_data = []
    # all scores:
    scores = []
    # just the scores that met our threshold:
    accepted_scores = []
    # iterate throgh however many games we want:
    for _ in range(initial_games):
        score = 0
        # moves specifically from this environment:

