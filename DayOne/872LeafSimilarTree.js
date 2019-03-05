var leafSimilar = function(root1, root2) {
    let leafSet1 = checkTree(root1);
    let leafSet2 = checkTree(root2);
    return leafSet1 == leafSet2;
};
    
let checkTree = (tree) => {
    let result = '';
    let toBeViewed = [tree];
    while (toBeViewed.length) {
        let current = toBeViewed.pop();
        if (!current.left && !current.right) {
            result = result + current.val;
        }
        if (current.left) toBeViewed.push(current.left);
        if (current.right) toBeViewed.push(current.right);
    }
    return result;
}