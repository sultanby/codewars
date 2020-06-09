"""
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

#Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
"""

def mxdiflg(a1, a2):
    if len(a1) == 0 or len(a2) == 0:
        return -1
    else:
        max1 = max(a1, key=len)
        min1 = min(a1, key=len)
        max2 = max(a2, key=len)
        min2 = min(a2, key=len)
        #c1 = max(len(max1), len(max2))
        #c2 = min(len(min1), len(min2))
        #c3 = c2-c1
        c1 = abs(len(max1) - len(min2))
        c2 = abs(len(min1) - len(max2))
        c3 = max(c1, c2)
    return(c3)