var maxDepth = function(root) {
    if (!root) return 0;
    let ans = 1;
    let toBeViewed = [root, 's'];
    while (toBeViewed.length > 1) {
        let cur = toBeViewed.shift();
        if (cur === 's') {
            ans += 1;
            toBeViewed.push('s')
        } else {
            if (cur.left) toBeViewed.push(cur.left);
            if (cur.right) toBeViewed.push(cur.right);
        }
    }
    return ans;
};