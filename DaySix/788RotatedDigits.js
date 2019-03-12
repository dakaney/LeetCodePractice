var rotatedDigits = function(N) {
    let validCount = 0;
    for (let i = 2; i <= N; i++) {
        let isValid = false;
        let curNum = i;
        while (curNum !== 0) {
            let curDigit = curNum % 10;
            curNum = Math.floor(curNum / 10);
            if (curDigit === 3 || curDigit === 4 || curDigit === 7) {
                isValid = false;
                break;
            } else if (curDigit === 2 || curDigit === 5 || curDigit === 6 || curDigit === 9) {
                isValid = true;
            }
        }
        if (isValid) validCount += 1
    }
    return validCount;
};