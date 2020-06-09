"""
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
"""

def stray(arr):
    c1 = arr[0]
    c2 = arr[1]
    eqnum = 0
    if c1 == c2:
        eqnum = c1
    else:
        if c1 == arr[2]:
            return c2
        else:
            return c1
    for i in range(2, len(arr)):
        if arr[i] != eqnum:
            return arr[i]
    return c1
    