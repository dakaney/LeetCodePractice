var reverseOnlyLetters = function(S) {
    let charStr = '';
    let result = '';
    for (let i = 0; i < S.length; i++) {
        if (S[i].match(/[a-zA-Z]/)) {
            charStr = S[i] + charStr;
        }
    }
    let indexOfChars = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i].match(/[a-zA-Z]/)) {
            result += charStr[indexOfChars];
            indexOfChars++;
        } else {
            result += S[i];
        }
    }
    return result;
};