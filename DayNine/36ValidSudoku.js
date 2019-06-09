var isValidSudoku = function(board) {
    let rowMap = {};
    let colMap = {};
    let gridMap = {};
    for (let i = 0; i < board.length; i++) {
        rowMap[i] = new Array(9).fill(false);
        for (let j = 0; j < board[i].length; j++) {
            if (i === 0) colMap[j] = new Array(9).fill(false);
            if (board[i][j] === '.') continue;
            let curVal = Number(board[i][j]) - 1
            let gridIndex = 10 * Math.floor(i / 3) + Math.floor(j/3);
            if (!gridMap[gridIndex]) gridMap[gridIndex] = new Array(9).fill(false);
            let flag = false;
            rowMap[i][curVal] ? flag = true : rowMap[i][curVal] = true;
            colMap[j][curVal] ? flag = true : colMap[j][curVal] = true;
            gridMap[gridIndex][curVal] ? flag = true : gridMap[gridIndex][curVal] = true;
            if (flag) return false;
        }
    }
    return true;
};