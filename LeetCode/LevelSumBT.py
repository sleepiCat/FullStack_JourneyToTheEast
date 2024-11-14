"""
Observations/Goals:
- Traverse each level of the binary tree and sum the values
- Input can possibly be empty tree
- Output should be a list of sums per level

Brainstorm:
- I can traverse trees with bfs or dfs but in this case we want to visit each level entirely so it should be bfs
- BFS can be implemented with a queue and for loop
- Each level can be processed by looping the length of the queue
- For loop also must repopulate the queue 

Analysis:
- Each node must be visited to calculate the sum for a level
- The implementation will visit each node once
- TimeComplexity is O(n), where n is the number of nodes
- Space Complexity depends on the size of the queue, and worst case it proportional to the last layer of the bt. Thus space complexity scales O(n)

Implementation:
return root if not existent
create a queue and store the root
loop while queue exists 
loop for length of queue
have a running sum of the queues on the node
update queue with current node's children
store sum for the level in the results
return the results 
"""
from collections import deque

class Solution:
    def level_order_sum(self, root: TreeNode):
        # Your code goes here
        if not root:
            return []

        queue = deque([root])
        results = []

        while queue:

            sum_ = 0
            for _ in range(len(queue)):
                curr_node = queue.popleft()
                sum_ += curr_node.val

                if curr_node.left:
                    queue.append(curr_node.left)
                if curr_node.right:
                    queue.append(curr_node.right)

            results.append(sum_)

        return results