var binaryGap = function(N) {
    let binary = N.toString(2);
    let count = 0;
    let distance = 0;
    for (let i = 0; i < binary.length; i++) {
        if (distance === 0) {
            if (binary[i] === '1') {
                distance += 1;
            }
        } else {
            if (binary[i] === '0') {
                distance += 1;
            } else {
                count = Math.max(distance, count);
                distance = 1;
            }
        }
    }
    return count;
};