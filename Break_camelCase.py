"""
Complete the solution so that the function will break up camel casing, using a space between words.

Example

solution("camelCasing")  ==  "camel Casing"
"""

def solution(s):
    c = ""
    for x in range(len(s)):
        if s[x].islower():
            c = c + s[x]
        else:
            c = c + " " + s[x]
            continue
    return c