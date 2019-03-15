var integerBreak = function(n) {
    if (n === 2) return 1;
    if (n === 3) return 2;
    let threeCount = 0;
    let twoCount = 0;
    while (n > 0) {
        if (n > 4 || n === 3) {
            threeCount++;
            n -= 3;
        } else {
            n -= 2;
            twoCount++;
        }
    }
    return Math.pow(3, threeCount) * Math.pow(2, twoCount);
};