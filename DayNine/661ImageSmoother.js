var imageSmoother = function(M) {
    let ans = [];
    for (let i = 0; i < M.length; i++) {
      let curArr = [];
        for (let j = 0; j < M[i].length; j++) {
            let curVal = helper(M, i, j);
            curArr.push(curVal)
        }
        ans.push(curArr);
    }
    return ans;
};

let helper = (matrix, i, j) => {
    let count = 0;
    let total = 0;
    for (let k = -1; k < 2; k++) {
        if (matrix[i+k]) {
            if (matrix[i+k][j-1] >= 0) {
                count += 1;
                total += matrix[i+k][j-1];
            }
            if (matrix[i+k][j+1] >= 0) {
                count += 1;
                total += matrix[i+k][j+1];
            }
            count += 1;
            total += matrix[i+k][j]
        }    
    }
    return Math.floor(total/count)
}