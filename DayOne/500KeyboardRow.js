var findWords = function(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let wordRow = findRow(words[i][0])
        for (let j = 0; j < words[i].length; j++) {
            let currentRow = findRow(words[i][j]);
            if (wordRow === currentRow && j === words[i].length - 1) {
                result.push(words[i])
            } else if (wordRow !== currentRow) {
                break;
            }
        }
    }
    return result;
};

let findRow = (letter) => {
    if ('qwertyuiopQWERTYUIOP'.includes(letter)) return 1;
    if ('asdfghjklASDFGHJKL'.includes(letter)) return 2;
    return 3
}