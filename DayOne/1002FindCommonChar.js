var commonChars = function(A) {
    let totalSet = {};
    let result = [];
    for (let i = 0; i < A[0].length; i++) {
        totalSet[A[0][i]] = totalSet[A[0][i]] + 1 || 1 
    }
    for (let i = 1; i < A.length; i++) {
        let currentSet = {};
        for (let j = 0; j < A[i].length; j++) {
            if (totalSet[A[i][j]]) {
                currentSet[A[i][j]] = currentSet[A[i][j]] || 0;
                if (currentSet[A[i][j]] < totalSet[A[i][j]]) {
                    currentSet[A[i][j]] += 1;
                }
            }
        }
        totalSet = currentSet;
    }
    for (let letter in totalSet) {
        for (let i = 0; i < totalSet[letter]; i++) {
            result.push(letter);
        }
    }
    return result;
};
