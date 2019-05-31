var sumOfLeftLeaves = function(root, isLeft) {
    if (!root) return 0;
    if (!root.left && !root.right && isLeft) return root.val
    let left = sumOfLeftLeaves(root.left, true);
    let right = sumOfLeftLeaves(root.right, false);
    return left + right;
};