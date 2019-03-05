var trimBST = function(root, L, R) {
    let result = new TreeNode(1);
    let searchTree = (node) => {
        if (node === null) return null;
        node.left = searchTree(node.left);
        node.right = searchTree(node.right);
        if (node.val >= L && node.val <= R) return node;
        if (node.left) return node.left;
        if (node.right) return node.right;
        return null
    }
    result.right = searchTree(root);
    return result.right;
};