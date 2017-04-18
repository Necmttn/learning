"""
What parameters should be sent to the range constructor, to produce a range with values 8, 6, 4, 2, 0, −2, −4, −6, −8?
"""
array = []

for num in range(8, -9, -2):
    array.append(num)

print(array)
