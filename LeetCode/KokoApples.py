"""
loop through the sorted trees and at the first instance that the rate will not work reset the loop and increase rate by 1

the first occurence of where the min harvest rate is where bobby completes the harvest under the amount of time: h

Implementation:
loop through the list of trees
calculate the time to finish give rate to complete that tree 
subtract that finish time from total
1. total is 0 or under 0 -> reset loop and increase rate
2. total is 0 or under 0 and finished with trees -> return found rate 

"""
import math
"""
loop through the sorted trees and at the first instance that the rate will not work reset the loop and increase rate by 1



"""
import math
class Solution:
    def minHarvestRate(self, apples, h):

        allowed_harvest_time = h
        completion_time = 0
        rate = 1
        while True:
            
            for i in range(len(apples)):
                completion_time += math.ceil(apples[i]/rate)
                print(completion_time, allowed_harvest_time)
                if completion_time > allowed_harvest_time:
                    #took too long, reset rate
                    rate += 1
                    break
            
            #break on the first occurence of where bobby finishes before AHT
            print(completion_time, allowed_harvest_time)
            if completion_time <= allowed_harvest_time:
                print("found min rate of:", rate,"apples per hour")
                break
            
            completion_time = 0
        return rate

                
            
sol = Solution()
apples = [3,6,7,11]
         #2  3  4 = 9
h = 8

print(sol.minHarvestRate(apples, h))
            