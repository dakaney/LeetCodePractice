var invertTree = function(root) {
    if (!root) return null;
    let toBeViewed = [root];
    while (toBeViewed.length) {
        let curNode = toBeViewed.shift();
        let tempNodeHolder = curNode.left;
        curNode.left = curNode.right;
        curNode.right = tempNodeHolder;
        if (curNode.right) toBeViewed.push(curNode.right);
        if (curNode.left) toBeViewed.push(curNode.left);
    }
    return root;
};