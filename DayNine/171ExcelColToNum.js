var titleToNumber = function(s) {
    let result = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        result += ((s.charCodeAt(i) - 64) * Math.pow(26, s.length - 1 - i));
    }
    return result;
};