"""
Write a short Python function that takes a positive integer n and returns the sum of the squares of all the positive integers smaller than n.
"""

def squeareThemAll(n):
    result = 0
    for number in range(n):
        result += number ** 2
    return print(result)

def hello():
    print("world")
