var allCellsDistOrder = function(R, C, r0, c0) {
    let matrix = [];
    let ans = [];
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            let distance = Math.abs(r0 - i) + Math.abs(c0 - j);
            if (!matrix[distance]) matrix[distance] = [];
            matrix[distance].push([i,j]);
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            ans.push(matrix[i][j])
        }
    }
    return ans;
};