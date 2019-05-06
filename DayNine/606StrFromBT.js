var tree2str = function(t) {
    if (!t) return '';
    let curVal = t.val.toString();
    let left = tree2str(t.left);
    let right = tree2str(t.right);
    if (left !== '' || right !== '') {
        left = '(' + left + ')';
    }
    if (right !== '') {
        right = '(' + right + ')';
    }
    return curVal + left + right;
};