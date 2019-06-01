var longestPalindrome = function(s) {
    let letterStorage = {};
    for (let i = 0; i < s.length; i++) {
        letterStorage[s[i]] = letterStorage[s[i]] + 1 || 1;
    }
    let count = 0;
    let singleChar = false;
    for (let key in letterStorage) {
        if (letterStorage[key] % 2 !== 0) singleChar = true;
        if (letterStorage[key] >= 2) count += Math.floor(letterStorage[key] / 2) * 2;
    }
    if (singleChar) count += 1;
    return count;
};