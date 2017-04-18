"""
Write a Python program that outputs all possible strings formed by using
the characters c , a , t , d , o , and g exactly once.
"""
given_chars = ['c' , 'a' , 't' , 'd' , 'o' , 'g']

# def humble(iterable, r):
#     # combinations_with_replacement('ABC', 2) --> AA AB AC BB BC CC
#     pool = tuple(iterable)
#     n = len(pool)
#     if not n and r:
#         return
#     indices = [0] * r
#     yield tuple(pool[i] for i in indices)
#     while True:
#         for i in reversed(range(r)):
#             if indices[i] != n - 1:
#                 break
#         else:
#             return
#         indices[i:] = [indices[i] + 1] * (r - i)
#         yield tuple(pool[i] for i in indices)

# result = []

# for i in range(len(given_chars)):
#     result += (humble(given_chars, i+1))

# for g in result:
#     print("".join(g))
def words(letters, word=''):
    letters or print(word)
    for letter in letters:
        words(letters - {letter}, word + letter)

words(set('catdog'))
