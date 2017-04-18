"""
Write a short Python function that takes a strings,representing a sentence, and returns a copy of the string with all punctuation removed.
For exam- ple, if given the string "Let s try, Mike.", this function would return "Lets try Mike".
"""
given_string = "Let's try, Mike."
def cleanPunctionals(str):
    return "".join([x for x in str if x in [chr(n) for n in range(32, 123) if n == 32 or 65 <= n <=90 or 97 <= n <= 123 ]])
print(cleanPunctionals(given_string))
print(given_string)


