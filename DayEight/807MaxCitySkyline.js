var maxIncreaseKeepingSkyline = function(grid) {
    let vMax = [];
    let hMax = [];
    let count = 0;
    for (let row in grid) {
        for (let col in grid[row]) {
            if (!vMax[col] || vMax[col] < grid[row][col]) vMax[col] = grid[row][col];
            if (!hMax[row] || hMax[row] < grid[row][col]) hMax[row] = grid[row][col];
        }
    }
    console.log(vMax)
    for (let r in grid) {
        for (let c in grid[r]) {
            let maxHeight = Math.min(vMax[c], hMax[r]);
            if (grid[r][c] < maxHeight) count += maxHeight - grid[r][c];
        }
    }
    return count;
};