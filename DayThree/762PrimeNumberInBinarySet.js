var countPrimeSetBits = function(L, R) {
    let primeStorage = {2:2, 3:3, 5:5, 7:7, 11:11, 13:13, 17:17, 19:19, 23:23, 29:29, 31:31};
    let count = 0;
    for (let i = L; i <= R; i++) {
        let curValInBits = i.toString(2);
        let setBitCount = 0;
        for (let j = 0; j < curValInBits.length; j++) {
            if (curValInBits[j] === '1') setBitCount += 1;
        }
        if (primeStorage[setBitCount]) count += 1;
    }
    return count;
};