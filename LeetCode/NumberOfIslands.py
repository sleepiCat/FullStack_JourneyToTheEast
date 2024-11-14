class Solution:
    def number_of_islands(self, grid):

        #global variables
        count = 0
        row = len(grid)
        col = len(grid[0])

        #helper function to perform dfs to change state of map each time a island is fully discovered
        def dfs(row, col, grid): # parameters could be state
            #base case
            grid[row][col] = 0

            #calculations + recursive call
            #check adjacent cells for island: 1
            #up + boundaries
            if row-1 > 0 and grid[row-1][col] == 1:
                dfs(row-1, col,grid)
            #down
            if row + 1 < len(grid) and grid[row + 1][col] == 1:
                dfs(row+1, col,grid)
            #left
            if col - 1 > 0 and grid[row][col - 1] == 1:
                dfs(row, col-1,grid)
            #right
            if col + 1 < len(grid[0]) and grid[row][col + 1] == 1:
                dfs(row, col+1,grid)

            return

        #should be returning number of island: int

        for i in range(row):
            for j in range(col):
                if grid[i][j] == 1: #found an island
                    count += 1
                    dfs(i,j, grid) #remove that island from grid

        return count