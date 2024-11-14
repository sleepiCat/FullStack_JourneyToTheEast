class Solution:
    def trappingWater(self, height: list[int]):
        # Your code goes here
        if len(height) == 0:
            return 0
        # define the left and right pointers
        left, right = 0, len(height) -1
        #define left and right max heights
        leftMax, rightMax = height[left], height[right]
        area = 0
        """
        move the left and right pointers based on smaller size
        calc the rainwater captured by comparing height difference between max side height(leftmax,rightmax)
        loop condition must leave room for 1 space between left and right ptr
        """

        while left + 1 < right:
            
            if leftMax < rightMax:
                #leftPointer dictates the initial water
                left += 1
                #compare rainwater
                if left < right and height[left] < leftMax:
                    #smaller than left, so find out how much water
                    area += leftMax - height[left]
                else:
                    #larger than leftMax, update leftMax
                    leftMax = height[left]
            else: #rightMax is less
                right -= 1
                if right > left and height[right] < rightMax:
                    area += rightMax - height[right]
                else:
                    rightMax = height[right]
                

        return area