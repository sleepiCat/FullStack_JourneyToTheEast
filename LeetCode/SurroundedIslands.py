#remove all the o's in the grid that are surrounded by x
#o's surrounded by border does not count
'''
so maybe instead of checking at the border start one row under and end one row before the end
start one column to the right and end one column before the end

or have boundary checks for each index, if the o reaches the boundary then it is not considered surrounded

so for example: 
grid = [
["X","X","X","X","O"],
["X","X","O","X","X"],
["X","X","O","X","O"],
["X","O","X","X","X"]
["X","O","X","X","X"]
]


[[x,x,x,o],
 [x,o,o,o], <- this is considered bounded, since on each adjacent
 [x,x,x,x],        cell there is a x, besides an o
 [x,x,x,x]]

 anywhere the o reaches the boundary it is no longer considered surrounded

 conditions for bounded: 
 1. o is not at the boundary
 2. o is surrounded by x 
    if o is connected to another o, it must also be checked
    to move to the next cell we could use dfs

base case: 
    once we see a cell with 'o', we verify if all 4 sides are 'x'



ASK YOURSELF when should I be returning from the DFS?

What should I be performing DFS on? 

Can I modify any of the input to make solving the question easier?

What is an inherent properties of the data that I'm working with?
Mathematical, rules, 
'''

class Solution:
    def surrounded_regions(self, grid):

        if not grid:
            return grid

        row = len(grid)
        col = len(grid[0])

        #change the border "O"s to "S" 
        def validate_surrounded(row, col, grid):
            # base case : check why should it return!!!
            # 4 sides and check if in bounds
            if row > len(grid)-1 or row < 0 or col < 0 or col > len(grid[0])-1 or grid[row][col] != 'O':
                return 
            grid[row][col] = 'S'
            #check top
            validate_surrounded(row-1, col, grid)
            #check bot
            validate_surrounded(row+1, col, grid)
            #check left
            validate_surrounded(row, col-1, grid)
            #check right
            validate_surrounded(row, col+1, grid)

            

        #make modifications to the grid to remove the bad 'O's
        #only on the boardering row's and column's
        for i in range(row):
            if grid[i][0] == 'O':
                validate_surrounded(i,0, grid)
            if grid[i][col-1] == 'O':
                validate_surrounded(i,col-1,grid)
        for j in range(col):
            if grid[0][j] == 'O':
                validate_surrounded(0, j, grid)
            if grid[row-1][j] == 'O':
                validate_surrounded(row-1, j, grid)
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 'O':
                     # modifications to the grid or verification
                    grid[i][j] = 'X'
                elif grid[i][j] == 'S':
                    grid[i][j] = 'O'
        return grid