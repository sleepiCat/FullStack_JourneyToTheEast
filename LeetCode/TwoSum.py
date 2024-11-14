from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        #return indices of two values that add up to target
        #assume exactly one solution, not repeating the same element? index?
        """
        approach: loop through the list and tally up the occurences of the nums
        find the second number in the occurences if it exists

        somehow link together the data: (num, index)
        num: index
        num: occurences
        """

        """occ = {}
        num_to_index = {}

        for i in range(len(nums)):
            n = nums[i]
            num_to_index[n] = i 
            if n in occ:
                occ[n] += 1
            else:
                occ[n] = 1

        #finished populating the dictionaries

        for number, occurence in occ.items():
            complement_sum = target - number

            if complement_sum in occ:"""
                
        
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        hashMap = {}

        for i in range(n):
            comp = target - nums[i]

            # already exist, return the new list of indices
            if comp in hashMap.keys():
                return [hashMap[comp], i]
            # not exist, add to dictionary 
            else:
                hashMap[nums[i]] = i

        # no solution found
        return []


# Test Cases
sol = Solution()
assert sol.twoSum([2,7,11,15], 9) == [0,1]
assert sol.twoSum([3,2,4], 6) == [1,2]














    


        