var isAlienSorted = function(words, order) {
    for (let i = 0; i < words.length - 1; i++) {
        let curWord = words[i];
        let nextWord = words[i+1];
        let curIndex = 0;
        while (curWord[curIndex]) {
            if (!nextWord[curIndex]) return false;
            if (order.indexOf(curWord[curIndex]) < order.indexOf(nextWord[curIndex])) {
                break;
            } else if (order.indexOf(curWord[curIndex]) > order.indexOf(nextWord[curIndex])) {
                return false;
            }
            curIndex += 1;
        }
    }
    return true;
};