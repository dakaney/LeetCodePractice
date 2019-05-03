var canThreePartsEqualSum = function(A) {
    let sum = 0;
    for (const a of A) {
        sum += a;
    }
    if (sum % 3 !== 0) {
        return false;
    }
    let t = parseInt(sum / 3);
    let cur = 0;
    let count = 0;
    for (const a of A) {
        cur += a;
        if (cur === t) {
            count++;
            cur = 0;
        }
        if (count > 3) {
            return false;
        }
    }
    return count === 3;
};