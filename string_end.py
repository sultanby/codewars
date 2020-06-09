"""
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') # returns true
solution('abc', 'd') # returns false
"""

def solution(string, ending):
    if len(string) < len(ending):
        return False
    if ending == '':
        return True
        #print(bool(ending == ''))
    for n in range(1,len(ending)+1):
        if (string[-n] != ending[-n]):
            return False
        else: 
            continue
    return True