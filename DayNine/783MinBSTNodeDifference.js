var minDiffInBST = function(root) {
    let prev = 1000;
    let min = 1000;
    let helper = (node) => {
        if (!node) return;
        helper(node.left);
        min = Math.min(min, Math.abs(node.val - prev));
        prev = node.val;
        helper(node.right);
    }
    helper(root);
    return min;
};