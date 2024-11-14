"""
Observations:
the goal is to return the longest palindrome substring
What is a palindrome: same letter spelled back and forwards
How do I know I have a palindrome?

Brainstorm:
- two pointer method and compare from outside in
- combine with the sliding window method


abcbabcb
s      e
 s    e <- would have missed the longest substring 

abcbabcb
s      e
 s     e <- same char so then move both

abcbabcb
s      e
  s   e <- same char so then move both

abcbabcb
s      e
   s e <- same char so then move both

abcbabcb
s      e
    s/e <- same char so then move both

Stop here if s <= e, found the longest substring



abcbaaabc
s       e <- move s forwards by 1 if not the same, reset e to the end
 s     e


abcd 
s  e <- move s forwards
 s
  s
   s/e <- end

goal return the largest substring
 
Implementation:
move the s pointer forwards each iteration 
reset e pointer to the end if different values
each iteration needs to have a ref of the start and end index -> maybe pass indices to be checked for palindrome to a helper function

- 
Analysis:
at each index the letter will be checked for a possible palindrom from s to e 
that is O(n + m) n being the length of string, m being length of substring
space complexity is O(1) if I only keep track of the indices of the longest substring

"""

class Solution: 
    
    def isPalindrome(self, s: str) -> bool:
        return s == s[::-1]
    def longestPalindrome(self, s: str) -> str:
        max_pal = 0
        size = len(s) 
        for i in range(len(s)):
            for j in range(i,len(s)):
                if self.isPalindrome(s[i:j:]):
                    max_pal = max(max_pal, j-i )
        return max_pal
   