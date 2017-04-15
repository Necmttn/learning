"""
Write a short Python function, is multiple(n, m), that takes two integer values and returns True if n is a multiple of m, that is, n = mi for some integer i, and False otherwise.
"""
print("which numbers you wanna check for is it multiple")
print("first number")
n = int(input())
print("second number")
m = int(input())

def is_multiple(n, m):
    if n % m == 0:
        print("i is equal to")
        print(n /m)
        return True
    else:
        return False

print(is_multiple(n, m))


