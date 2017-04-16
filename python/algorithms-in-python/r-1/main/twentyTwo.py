"""
Write a short Python program that takes two arrays a and b of length n storing int values, and returns the dot product of a and b. That is, it returns an array c of length n such that c[i] = a[i]·b[i], for i = 0,...,n−1.
"""

def dot(arr1, arr2):
    result = []
    for n in range(len(arr1)):
        result.append(arr1[n] * arr2[n])
    return result



arr3 = [3,4,5,6]
arr4 = [10, 20, 30, 40]

print(dot(arr3, arr4))

