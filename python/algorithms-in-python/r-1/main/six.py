"""
Write a short Python function that takes a positive integer n and returns the sum of the squares of all the odd positive integers smaller than n.
"""
from two import is_even

def squareOddThemAll(n):
    result = 0
    for number in range(n):
        if is_even(number) == False:
            result += number ** 2
    return result
