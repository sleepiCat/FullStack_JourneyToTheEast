def variable_length_sliding_window(nums):
    state = # choose appropriate data structure
    start = 0
    max_ = 0

    for end in range(len(nums)):
        # extend window
        # add nums[end] to state

        while state is not valid:
            # shrink window
            # remove nums[start] from state in O(1) time
            start += 1

        # Invariant: state of current window is valid here:
        # update max_ here
        max_ = max(max_, end - start + 1)

## Use this template for problems that require a variable length sliding window
## keywords: continous subsequence that satisfies a certain constraint

