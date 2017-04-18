"""
Demonstrate how to use Python’s list comprehension syntax to produce
the list [0, 2, 6, 12, 20, 30, 42, 56, 72, 90].
"""
print([0, 2, 6, 12, 20, 30, 42, 56, 72, 90])
array = [n * (n+1) for n in range(10)]
print(array)
