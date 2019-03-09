var addDigits = function(num) {
    let strNum = num.toString().split('');
    if (strNum.length <= 1) return num;
    let newNum = 0;
    for (let i = 0; i < strNum.length; i++) {
        newNum += Number(strNum[i]);
    }
    return addDigits(newNum);
};