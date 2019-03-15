var mostCommonWord = function(paragraph, banned) {
    let wordsArr = paragraph.replace(/[^ a-zA-Z]/g, ' ').toLowerCase().split(' ')
    let bannedSet = {};
    let allowedSet = {};
    let maxWord = '';
    let maxCount = 0;
    for (let i = 0; i < banned.length; i++) {
        bannedSet[banned[i]] = true;
    }
    for (let i = 0; i < wordsArr.length; i++) {
        if (!bannedSet[wordsArr[i]] && wordsArr[i] !== '') {
            allowedSet[wordsArr[i]] = allowedSet[wordsArr[i]] + 1 || 1;    
        }
        if (allowedSet[wordsArr[i]] > maxCount) {
            maxCount = allowedSet[wordsArr[i]];
            maxWord = wordsArr[i];
        }
    }
    return maxWord;  
};