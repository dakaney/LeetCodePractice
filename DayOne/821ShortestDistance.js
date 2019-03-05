var shortestToChar = function(S, C) {
    let result = [];
    let distance = S.length;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) {
            distance = 0;
        }
        result[i] = distance;
        distance += 1;
    }
    distance = S.length;
    for (let j = S.length - 1; j >= 0; j--) {
        if (S[j] === C) {
            distance = 0;
        }
        result[j] = Math.min(result[j], distance);
        distance += 1;
    }
    return result;
};