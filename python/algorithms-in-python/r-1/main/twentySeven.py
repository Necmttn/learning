"""
In Section 1.8, we provided three different implementations of a generator
that computes factors of a given integer. The third of those implementations,
from page 41, was the most efficient, but we noted that it did not
yield the factors in increasing order. Modify the generator so that it reports
factors in increasing order, while maintaining its general performance advantages.
"""

def factors(n): # generator that computes factors
    k=1
    while k <= n: # while k < sqrt(n)
        if n % k == 0:
            yield k
        k += 1


fact = factors(100)
for a in fact:
    print(a)

