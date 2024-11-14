"""
Observation:
input: string, range(0, big num), only letters(no whitespaces, no numbers, no characters)
output: int

goal is to find longest substring without repeating letters

Brainstorm:
    I would need to keep count of seen characters
        hashmap? array? set?
    I would also need to keep count of current max substring length
        len() -> returns length of any sequence, collection data type

    I have to look at every single character
    left to right or right to left might not matter

    left to right
    
    "abcabccbb" -> 3
    "bbbb" -> 1
    "pwwkew" -> 3 "kew"
    "a" -> 1

Analysis:
    At least O(n)
    Space O(n)

Implementation:
    loop through the string
    build the substring through seen occurences of the chars in the hashmap
    comparing the substring to the next char:
    1. char is not in the substring -> add char to hashmap + increases the length
    2. char is already in the hashmap -> the current length of the hashmap is the max substring
        store current max and reset the hashmap to empty and then add the new char
    once the loop is complete 
    1. compare the hashmap length with the current max substring

    2. return current max

{a,c,b}, a
acbab 
cba

"""
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        leftP, rightP = 0,0
        seen_chars = {}
        max_sub = 0
        while rightP < len(s):
            r = s[rightP] #value of the right pointer
            index = seen_chars.get(r,None) #get the index of the duplicate letter

            if index is not None and index >= leftP and index < rightP: #if the duplicate letter is within the current substring 
                # duplicate letter found
                leftP = index +1 #move the left pointer to the index of the duplicate letter
                
            max_sub = max(max_sub, rightP-leftP + 1)

            seen_chars[r] = rightP #add the letter to the hashmap
            rightP += 1 #increase right pointer by 1

        return max_sub

            # if s[rightP] in seen_chars:
            #     #dup found
            #     #how far should leftP move?
            #     max_sub = max(max_sub, rightP-leftP )
            #     index = seen_chars[s[rightP]]
            #     leftP = index + 1
            #     rightP += 1
            # else:
            #     seen_chars[s[rightP]] = rightP
            #     rightP += 1
            #     max_sub = max(max_sub, rightP-leftP )

"""
same statements in the if and else code block can be moved outside!!!
Both cases those lines of code should run


"""
            
