var intervalIntersection = function(A, B) {
    let result = [];
    let indexA = [0,0];
    let indexB = [0,0];
    let curInterval = [-1,0];
    let count = 0;
    while (A[indexA[0]] || B[indexB[0]]) {
        let curA = Infinity;
        let curB = Infinity;
        let curVal;
        if (A[indexA[0]]) {
            curA = A[indexA[0]][indexA[1]];
        }
        if (B[indexB[0]]){
            curB = B[indexB[0]][indexB[1]];
        }
        if (curA < curB) {
            curVal = curA;
            count = indexA[1] === 0 ? count + 1 : count - 1;
            indexA = indexA[1] === 0 ? [indexA[0], 1] : [indexA[0] + 1, 0];
        } else if (curA === curB) {
            curVal = curA;
            if (indexA[1] === 0) {
                count++;
                indexA = [indexA[0], 1];
            } else if (indexB[1] === 0) {
                count++;
                indexB = [indexB[0], 1];
            } else {
                count--;
                indexA = [indexA[0] + 1, 0];
            }
        } else {
            curVal = curB;
            count = indexB[1] === 0 ? count + 1 : count - 1;
            indexB = indexB[1] === 0 ? [indexB[0], 1] : [indexB[0] + 1, 0];
        }
        if (count === 2) {
            curInterval[0] = curVal;
        } else if (count === 1 && curInterval[0] >= 0) {
            curInterval[1] = curVal;
            result.push(curInterval);
            curInterval = [-1,0];
        }
    }
    return result;
};