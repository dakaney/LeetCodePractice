var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) return null;
    let maxValue = nums[0];
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
            index = i
        }
    }
    let node = new TreeNode(maxValue);
    node.left = constructMaximumBinaryTree(nums.slice(0,index));
    node.right = constructMaximumBinaryTree(nums.slice(index + 1))
    return node;
};