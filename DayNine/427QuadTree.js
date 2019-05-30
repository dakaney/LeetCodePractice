var construct = function(grid) {
    let topLeft = [];
    let bottomLeft = [];
    let topRight = [];
    let bottomRight = [];
    let allSame = true;
    let val = grid[0][0];
    for (let i = 0; i < grid.length; i++) {
        let left = [];
        let right = [];
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== val) allSame = false;
            if (j < grid[i].length / 2) {
                left.push(grid[i][j]);
            } else {
                right.push(grid[i][j]);
            }
        }
        if (i < grid.length / 2) {
            topLeft.push(left)
            topRight.push(right)
        } else {
            bottomLeft.push(left)
            bottomRight.push(right)
        }
    }
    if (allSame) {
        if (val === 1) val = true;
        if (val === 0) val = false;
        let node = new Node(grid[0][0], true);
        return node;
    } else {
        let tL = construct(topLeft);
        let bL = construct(bottomLeft);
        let tR = construct(topRight);
        let bR = construct(bottomRight);
        let node = new Node(true, false, tL, tR, bL, bR)
        return node;
    }
};