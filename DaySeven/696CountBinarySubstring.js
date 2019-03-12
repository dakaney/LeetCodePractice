var countBinarySubstrings = function(s) {
    let substrCount = 0;
    let curStr = '';
    let prev = 0;
    let curr = 0;
    for (let i = 0; i < s.length; i++) {
        if (curStr !== s[i]) {
            prev = curr;
            curr = 1;
            curStr = s[i];
        } else {
            curr += 1;
        }
        if (curr <= prev) substrCount += 1;
    }
    return substrCount;
};