var surfaceArea = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) continue;
            let currentTower = grid[i][j] * 4 + 2;
            if (grid[i-1]) currentTower -= Math.min(grid[i-1][j], grid[i][j]);
            if (grid[i+1]) currentTower -= Math.min(grid[i+1][j], grid[i][j]);
            if (grid[i][j-1]) currentTower -= Math.min(grid[i][j-1], grid[i][j]);
            if (grid[i][j+1]) currentTower -= Math.min(grid[i][j+1], grid[i][j]);
            count += currentTower;
        }
    }
    return count;
};