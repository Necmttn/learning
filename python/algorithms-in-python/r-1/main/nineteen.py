"""
Demonstrate how to use Python’s list comprehension syntax to produce thelist[ a , b , c ,..., z ],butwithouthavingtotypeall26such characters literally.
"""
alphabet = [chr(n) for n in range(97, 123)]
print(alphabet)


