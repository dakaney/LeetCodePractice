var isPalindrome = function(s) {
    let newStr = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    let halfway = Math.ceil(newStr.length / 2);
    for (let i = 0; i < halfway; i++) {
        if (newStr[i] !== newStr[newStr.length - i - 1]) {
            return false
        }
    }
    return true;
};