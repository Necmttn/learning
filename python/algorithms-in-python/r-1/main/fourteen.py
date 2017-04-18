"""
Write a short Python function that takes a sequence of integer values and determines if there is a distinct pair of numbers in the sequence whose product is odd.
"""

def whosProductIsOdd(array):
    oddNumbers = []
    for number in array:
        if number % 2 == 1:
            #this is odd number.
            oddNumbers.append(number)
    return createPairs(oddNumbers)

def createPairs(array):
    pairs = []
    for k in range(len(array)):
        for n in range(k, len(array)):
            if n == k:
                pass
            else:
                pairs.append([array[k], array[n]])
    return pairs
