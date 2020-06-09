"""
Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
"""

def find_it(seq):
    for i in seq:
        n=0
        for j in seq:
            if i == j:
                n=n+1
        if n % 2!=0:
            return i
    return None