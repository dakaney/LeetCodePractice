var findTarget = function(root, k) {
    let numStorage = {};
    let nodesToVisit = [root];
    while (nodesToVisit.length) {
        let currentNode = nodesToVisit.pop();
        if (numStorage[(k - currentNode.val)]) return true;
        if (currentNode.left) nodesToVisit.push(currentNode.left);
        if (currentNode.right) nodesToVisit.push(currentNode.right);
        numStorage[currentNode.val] = true;
    }
    return false;
};