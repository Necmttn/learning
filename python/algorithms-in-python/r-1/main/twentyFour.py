"""
Write a short Python function that counts the number of vowels in a given
character string.
"""

given_string = " Write a short Python function that counts the number of vowels in a given "
def vowelCount(str):
    return len([x for x in str if x in ['a','e','i','o','u']])

print(vowelCount(given_string))

