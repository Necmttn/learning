"""
Python’s random module includes a function shuffle(data) that accepts a list of elements and randomly reorders the elements so that each possi- ble order occurs with equal probability. The random module includes a more basic function randint(a, b) that returns a uniformly random integer from a to b (including both endpoints). Using only the randint function, implement your own version of the shuffle function.
"""
import random

array = [1,2,3,5,6,7,8,9,0]

# random.shuffle(array)
# print(array)

def everyday_shuffling(arr):
    for n in range(len(arr)):
        random_index = random.randint(0, n)
        tmp = arr[random_index]
        arr[random_index] = arr[n]
        arr[n] = tmp
    return arr

print(len(array))
everyday_shuffling(array)
print(array)
print(len(array))

