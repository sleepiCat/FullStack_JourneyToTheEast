class Solution:
    def max_area(self, heights):
        left, right = 0, len(heights) - 1
        max_water = 0

        def calcWater(left, right):
            width = right - left
            return min(heights[right], heights[left]) * width

        def find_max(left, right):

            nonlocal max_water

            while left < right:
                current_max = calcWater(left, right)
                max_water = max(max_water, current_max)

                if heights[left] < heights[right]:
                    left += 1
                else:
                    right -= 1

        find_max(left, right)

        return max_water

sol = Solution()

water = [3,4,2,3]
assert sol.max_area(water) == 9