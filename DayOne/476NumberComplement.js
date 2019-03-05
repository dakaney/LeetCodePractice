var findComplement = function(num) {
    let binaryNum = num.toString(2);
    let result = '';
    for (let i = 0; i < binaryNum.length; i++) {
        if (binaryNum[i] === '0') {
            result += 1;
        } else {
            result += 0;
        }
    }
    return parseInt(result, 2);
};