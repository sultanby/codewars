"""
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
"""

def increment_string(strng):
    str_wo_nums = strng.rstrip('1234567890')
    nums = strng[len(str_wo_nums):]
    if len(nums) == 0:
        return (strng+str("1"))
    else:
        new_num = str(int(nums)+1)
        new_num_to_str = new_num.zfill(len(nums))
        return (str_wo_nums + new_num_to_str)