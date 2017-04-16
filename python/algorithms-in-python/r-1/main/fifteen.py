"""
Write a Python function that takes a sequence of numbers and determines if all the numbers are different from each other (that is, they are distinct).
"""

def is_unique_squence(array):
   return array == list(set(array))


print(is_unique_squence([1,2,3,4,5,6]))

print(is_unique_squence([1,2,1,2,3,4,5,6]))
