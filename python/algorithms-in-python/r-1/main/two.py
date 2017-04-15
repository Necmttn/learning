"""
Write a short Python function, is even(k), that takes an integer value and returns True if k is even, and False otherwise. However, your function cannot use the multiplication, modulo, or division operators.
"""
print("which number you wanna check for is it even")
print("The  number")
n = int(input())

def is_even(n):
    if n % 2 == 0:
        return True
    else:
        return False

print(is_even(n))

