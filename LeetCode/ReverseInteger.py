'''
Observations:
sign is maintained
ending 0's are removed
-2**31 <= x <= 2**31 -1

Implementation:
converting to a string and then reversing and remove the starting 0

mathematically parse the number
x % 10 : gives me the right most digit
x // 10 : reduces the integer by multiple of 10

x = 100
rightMost val = x % 10 -> 0
update x = x // 10 -> 10

rightMost val = x % 10 -> 0
update x = x // 10 -> 1

rightMost val = x % 10 -> 1
update x = x // 10 -> 0

So it naturally reverses the number if I take the rightmost value and build the new value

I'm thinking of accumulating the value but I'd have to also account for the power of 10th place.

Starting with a sum we can loop until the most updated x value is 0, bc it will mean that there are no more multiples of 10 and the 10 place is the smallest value. 
Accumulaate the sum and multiply the accumalted sum by 10 to move its place value and add the right most value.

sum = 0
rightMostVal = 0

Time and Space Complexity:
O(log10(n)) n being the number
O(1) : no auxillary memory 

'''

class Solution:
    def reverse(self, x: int) -> int:
        rM = 0
        rSum = 0
        sign = -1 if x < 0 else 1

        x = abs(x)
        while x > 0:
            rM = x % 10
            rSum = rSum*10 + rM
            x = x // 10

        val = sign * rSum
        # Ensure val falls within the 32 bit signed int range
        return 0 if val >= 2 ** 31 -1 or val < -2**31 else val

