var isCousins = function(root, x, y) {
    let level = 0;
    let result = [];
    let toSearch = [[root, null], 'level'];
    while (toSearch.length > 1 && result.length < 2) {
        let node = toSearch.shift();
        if (node === 'level') {
            toSearch.push('level');
            level += 1;
            continue;
        }
        if (node[0].val === x || node[0].val === y) {
            result.push([node[1], level]);
        }
        if (node[0].left) toSearch.push([node[0].left, node[0].val]);
        if (node[0].right) toSearch.push([node[0].right, node[0].val]);
    }
    return result[0][0] !== result[1][0] && result[0][1] === result[1][1];
};