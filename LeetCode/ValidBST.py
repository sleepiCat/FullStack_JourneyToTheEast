# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
Validate a binary search tree
left subtree is less than node's val
right subtree is greater than node's val
both left and right must be binary search trees

dfs question

what am I returning?
bool

input is a bt
can here be empty trees as input? no

if I was any node what would I need to know to ans the question?
1. is my left subtree a bst
2. is my right subtree a bst
3. along with the current node, left, and right trees is it still a bst?

so if I was a leaf node am I a bst
- yes, no nodes on either left or right subtree
if there are subtrees it must satisfy the condition


"""
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        
        def validate(root,max_,min_): #pass extra arguments to manage state
            #base cases
            if root is None:
                return True
            #calculations
            if not (min_ < root.val < max_):
                return False
                
            #recursive calls
            return validate(root.right, max_, root.val) and validate(root.left, root.val, min_)
            #return

        return validate(root,float("inf"), float("-inf"))