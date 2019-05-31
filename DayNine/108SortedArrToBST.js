var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    if (nums.length === 1) return new TreeNode(nums[0]);
    let middle = Math.floor(nums.length / 2);
    let node = new TreeNode(nums[middle]);
    node.left = sortedArrayToBST(nums.slice(0, middle));
    node.right = sortedArrayToBST(nums.slice(middle+1));
    return node;
};