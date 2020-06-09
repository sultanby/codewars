"""
Input

The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output

Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

Examples

song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  # =>  WE ARE THE CHAMPIONS MY FRIEND

"""

import re

def song_decoder(song):
    #for i in range(0, len(song)):
    #song.replace('WUB', ' ')
    ret = re.sub(r'WUB(WUB)*', ' ', song)
    if(ret[0] == ' ' and ret[-1] == ' '):
        return ret[1:-1]
    elif(ret[0] == ' '):
        return ret[1:]
    elif(ret[-1] == ' '):
        return ret[:-1]
    else: return ret