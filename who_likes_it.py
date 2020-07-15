"""
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
"""

def likes(names):
    delka_stringu = len(names)
    if delka_stringu == 0:
        return("no one likes this")
    elif delka_stringu == 1:
        return(names[0] + " likes this")
    elif delka_stringu == 2:
        return(names[0] + " and " + names[1] + " like this")
    elif delka_stringu == 3:
        return(names[0] + ", " + names[1] + " and "+ names[2] + " like this")
    else:
        delka_cisla = delka_stringu - 2
        return(names[0] + ", " + names[1] + " and " + str(delka_cisla) + " others like this")
