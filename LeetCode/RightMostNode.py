"""
Observations/Goals:
- Find the rightmost node in the binary tree
- Input can be an empty tree
- Output should be a list with the rightmost node values
- The rightmost node is the last node in the level order traversal

Brainstorm:
- The rightmost node can be found by traversing the tree in level order
- Level order traversal can be implemented with a queue
- The queue can be used to store the nodes of the tree

Implementation:
- Return empty list if root is not existent
- Create a queue and store the root
- Loop while queue exists
- Loop for length of queue
- Update the queue with the current node's children
- Store the last node in the level in the results
    - To do this, store the last node in the level in a variable
    - We can know that we are at the last node in the level if the queue is empty
- Return the results

Analysis:
- Each node must be visited to find the rightmost node
- Time complexity is O(n), where n is the number of nodes
- Space complexity is O(n) because the queue can store up to the last layer of the binary tree

"""
from collections import deque

class Solution:
    def rightmostNode(self, nodes: TreeNode):
        if not nodes: 
            return [] 
        
        queue = deque([nodes])
        results = []

        while queue:
            remaining_nodes = len(queue)
            for i in range(len(queue)):
                curr_node = queue.popleft()
                if remaining_nodes - 1 == i:
                    results.append(curr_node.val)

                if curr_node.left:
                    queue.append(curr_node.left)
                if curr_node.right:
                    queue.append(curr_node.right)

        return results