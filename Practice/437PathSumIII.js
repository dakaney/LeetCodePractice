var pathSum = function(root, sum, map = [], total = [0]) {
    if (!root) return 0;
    map.push(0)
    for (let i = 0; i < map.length; i++) {
        map[i] += root.val;
        if (map[i] === sum) {
            total[0] += 1;
        }
    }
    pathSum(root.left, sum, map, total)
    pathSum(root.right, sum, map, total)
    map.pop();
    for (let i = 0; i < map.length; i++) {
        map[i] -= root.val;
    }
    return total;
};