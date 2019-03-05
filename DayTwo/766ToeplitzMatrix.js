var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let row = i;
        let col = 0;
        let current = matrix[row][col];
        while (matrix[row] != undefined && matrix[row][col] != undefined) {
            if (current !== matrix[row][col]) return false;
            row += 1;
            col += 1;
        }
    }
    
    for (let i = 1; i < matrix[0].length - 1; i++) {
        let col = i;
        let row = 0;
        let current = matrix[row][col];
        while (matrix[row] != undefined && matrix[row][col] != undefined) {
            if (current !== matrix[row][col]) return false;
            row += 1;
            col += 1;
        }
    }
    return true;
};