"""
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
# should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
"""

def max_sequence(arr):
    if len(arr)==0:
        return 0
    max_now = 0
    max_all = 0
    for x in range (0, len(arr)):
        max_now = max_now + arr[x]
        if max_now < 0:
            max_now = 0
        if max_all < max_now:
            max_all = max_now
    return max_all