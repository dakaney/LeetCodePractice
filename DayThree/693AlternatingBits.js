var hasAlternatingBits = function(n) {
    let bitStr = n.toString(2);
    for (let i = 0; i < bitStr.length; i++) {
        if (bitStr[i] === bitStr[i+1]) return false;
    }
    return true;
};