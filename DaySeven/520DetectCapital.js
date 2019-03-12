var detectCapitalUse = function(word) {
    let isAllCaps = true;
    let isAllLower = true;
    let firstCap = true;
    if (word.charCodeAt() < 65 || word.charCodeAt() > 91) firstCap = false;
    for (let i = 1; i < word.length; i++) {
        let current = word.charCodeAt(i)
        if (current < 65 || current > 90) isAllCaps = false;
        if (current < 97 || current > 122) isAllLower = false;
    }
    return (firstCap && isAllCaps) || isAllLower
};