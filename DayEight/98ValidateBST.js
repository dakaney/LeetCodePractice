var isValidBST = function(root) {
    if (!root) return true;
    return searchTree(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};

let searchTree = (node, min, max) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    let left = searchTree(node.left, min, node.val);
    let right = searchTree(node.right, node.val, max);
    return left && right;
}