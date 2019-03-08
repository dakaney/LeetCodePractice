var letterCasePermutation = function(S) {
    let results = [S];
    let checkPerms = (s, index) => {
        for (let i = index; i < s.length; i++) {
            let currentChar = s.charCodeAt(i)
            if (currentChar >= 97 && currentChar <= 122) {
                let newChar = String.fromCharCode(currentChar - 32);
                let newStr = s.substring(0,i) + newChar + s.substring(i+1);
                results.push(newStr);
                checkPerms(newStr, i + 1)
            }
            if (currentChar >= 65 && currentChar <= 90) {
                let newChar = String.fromCharCode(currentChar + 32);
                let newStr = s.substring(0,i) + newChar + s.substring(i+1);
                results.push(newStr);
                checkPerms(newStr, i + 1)
            }
        }
    }
    checkPerms(S, 0);
    return results;
};