"""
Write a Python program that outputs all possible strings formed by using
the characters c , a , t , d , o , and g exactly once.
"""
given_chars = ['c' , 'a' , 't' , 'd' , 'o' , 'g']

def humble(array):
    n = 0
    while n <= len(array):
        for a in array:
            print(a)
        n += 1
humble(given_chars)
