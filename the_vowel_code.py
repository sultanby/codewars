Dict = {}
Dict['vowels'] = ["a", "e", "i", "o", "u"]
Dict['numbers'] = ["1", "2", "3", "4", "5"]
print (Dict)

def encode(st):
    st_to_list = list(st)
    for i in range(len(st_to_list)):
        n = st_to_list[i]
        if n in Dict['vowels']:
            vowels_list=Dict['vowels']
            index = vowels_list.index(n)
            st_to_list[i] = Dict['numbers'][index]
    final_string = ''.join(st_to_list)
    return final_string
    
def decode(st):
    st_to_list = list(st)
    for i in range(len(st_to_list)):
        n = st_to_list[i]
        if n in Dict['numbers']:
            numbers_list=Dict['numbers']
            index = numbers_list.index(n)
            st_to_list[i] = Dict['vowels'][index]
    final_string = ''.join(st_to_list)
    return final_string
