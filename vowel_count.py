"""
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
"""

def getCount(inputStr):
    vovelsy = ['a', 'e', 'i', 'o', 'u']
    b=0
    for i in inputStr:
        if i in vovelsy:
            b=b+1
    return b