var fairCandySwap = function(A, B) {
    let totalA = A.reduce((a,b) => a+b)
    let totalB = 0;
    let storageB = {};
    for (let i = 0; i < B.length; i++) {
        storageB[B[i]] = true;
        totalB += B[i];
    }
    let difference = (totalA - totalB) / 2;
    for (let i = 0; i < A.length; i++) {
        let findInB = A[i] - difference
        if (storageB[findInB]) {
            return [A[i], findInB]
        }
    }
};