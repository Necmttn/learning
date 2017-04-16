"""
Write a short program that takes as input three integers, a, b, and c, from
the console and determines if they can be used in a correct arithmetic
formula (in the given order), like “a+b = c,” “a = b−c,” or “a ∗ b = c.”
"""
a, b, c = [int(input()) for a in range(3)]


def check(a, b, c):
    if (a + b == c) or (a * b == c) or (a == b - c):
        return True
    else:
        return False

check(a, b, c)
