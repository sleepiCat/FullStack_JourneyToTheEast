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
    

    """
11_16_2024

Well what is a valid binary tree
The current node is larger than all left nodes, and less than all right nodes
If no nodes it is a valid tree

So we now have the base case:
if not root:
    return True

is there any more? There has to be another way to change the value otherwise.
We can do that within the calculation part, maybe along with the recursive call or using the state

Now visualize if you were placed anywhere in the recursive call, how would one know if it is a valid node?
Ref line 3. 
so validity = all_left_nodes(n) = is_valid(root.left) <- traverse each left subtree
all_right_nodes(n) = is_valid(root.right) <- traverse each right subtree

However, simply passing each node won't give us enough information to perform a calculation or decision based on previous nodes, so that hints at including more parameters to pass state/ OR create a global state to keep track of things

So we'll go with the parameters for now and allow the call stack to keep track of state per node

Now what do I need to know?
Ref line 3. the curr node has to be less than or greater than previous depending on the direction
curr_node = root

if going left, curr_node.val must be the largest value, assume we have all the information if not sure

is_valid_left(root.left, max= root.val, min)

then for the right 
is_valid_right(root.right, max, min= root.val)

now that some states are passed to the function during each call
how can it be used to determine the validity?
well if min is ever greater than max # Actually NO, We have to compare the value of the node to the states, not the states to each other

if min > max: 
    return False

INSTEAD OF ABOVE:
if not min < node.val < max:
    return False

So now adding together the parts

def is_valid(root, max, min):
    
    if not root:
        return True
    
    if min > max:
        return False

    #now make the recursive calls
    return is_valid(root.left, root.val, min) and is_valid(root.right, max, root.val)

Now this function looks really good, but what am I passing into min and max?? How did I know to use root.val instead of min or max?
Well going back to line 3, I already know what the max or min should be depending on the subtree I'm traversing. Because the fundamental attribute of a binary tree is that the node's value is always going to be either greater or less than the rest, thus at each recursive call I just need to update to use that value for max or min.

But to start the recursive function we need to pass in values that will always bound the possible values. Those are -infinity and +infinity, Can it be done a different way? Possibly with math or logical statements/ flags
"""

class Solution:
    def validateBST(self, root):

        min_ = float('-inf')
        max_ = float('inf')

        def is_valid(root, max_, min_):
            if not root:
                return True
            if not min_ < root.val < max_:
                return False

            return is_valid(root.left, root.val, min_) and is_valid(root.right, max_, root.val)
        
        return is_valid(root, max_, min_)