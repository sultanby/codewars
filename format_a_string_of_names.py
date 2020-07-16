"""
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ])
# returns 'Bart, Lisa & Maggie'

namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ])
# returns 'Bart & Lisa'

namelist([ {'name': 'Bart'} ])
# returns 'Bart'

namelist([])
# returns ''
"""

def namelist(names):
    result = ''
    delka = len(names)
    if(delka == 1):
        return names[0]['name']
    elif(delka == 2):
        result = names[0]['name'] + " & " + names[1]['name']
    elif(delka > 2):
        for n in range(0, delka-1):
            result = result + names[n]['name'] + ", "
        result = result[:-2] + " & " + names[delka-1]['name']
    return result