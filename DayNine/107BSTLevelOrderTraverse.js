var levelOrderBottom = function(root) {
    let ans = [];
    let curLevel = 0;
    let toView = [root, 'level'];
    while (toView.length > 1) {
        let current = toView.shift();
        if (current === 'level') {
            curLevel += 1;
            toView.push('level');
            continue;
        } else if (!current) {
            continue;
        } else {
            if (!ans[curLevel]) ans[curLevel] = [];
            ans[curLevel].push(current.val);
            toView.push(current.left, current.right);
        }
    }
    return ans.reverse();
};