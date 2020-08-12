"""
Write a function with the signature shown below:

def is_int_array(arr):
    return True
returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.
"""

def is_int_array(arr):
    if isinstance(arr, list):
        for i in arr:
            if i is None: 
                return False
            elif isinstance(i, str):
                return False
            elif isinstance(i, int):
                continue
            elif i.is_integer():
                continue
            else:
                return False
    else: 
        return False
    return True
