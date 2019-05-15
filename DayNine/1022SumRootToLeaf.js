var sumRootToLeaf = function(root, curBin = '') {
    let result = 0;
    if (!root) return 0;
    curBin += '' + root.val;
    if (!root.left && !root.right) {
        result += parseInt( curBin, 2 );
    }
    if (root.left) {
        result += sumRootToLeaf(root.left, curBin);
    }
    
    if (root.right) {
        result += sumRootToLeaf(root.right, curBin);
    }
    return result;
};