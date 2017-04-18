
"""
In our implementation of the scale function (page25),the body of the loop executes the command data[j]= factor.
We have discussed that numeric types are immutable, and that use of the  *= operator in this context causes the creation
of a new instance (not the mutation of an existing instance). How is it still possible, then, that our implementation of scale
changes the actual parameter sent by the caller?
"""

#the function which is at (page25)
def scale(data, factor):
    #for j in range(len(data)):
    #    arr[j] *= factor
    for k in data:
        k *= factor
        print k
    return data



array = [1,2,3,4,5,6]
array2 = scale(array, 3)

print array
print array

