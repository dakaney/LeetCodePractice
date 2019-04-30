var removeOuterParentheses = function(S) {
    let count = 0;
    let result = '';
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            count += 1;
            if (count !== 1) {
                result = result + S[i];
            }
        } else {
            count -= 1;
            if (count !== 0) {
                result = result + S[i];
            }
        }
    }
    return result;
};