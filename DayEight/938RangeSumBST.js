var rangeSumBST = function(root, L, R) {
    let result = 0;
    let checkNodes = [root];
    while (checkNodes.length > 0) {
        let curNode = checkNodes.pop();
        if (curNode.left) checkNodes.push(curNode.left);
        if (curNode.right) checkNodes.push(curNode.right);
        if (curNode.val <= R && curNode.val >= L) result += curNode.val;
    }
    return result;
};