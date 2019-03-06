var largestPerimeter = function(A) {
    let sortedA = A.sort((a,b) => a-b);
    for (let i = A.length-3; i >= 0; i--) {
        if (sortedA[i] + sortedA[i+1] > sortedA[i+2]) {
            return sortedA[i] + sortedA[i+1] + sortedA[i+2]
        }
    }
    return 0;
};