var reverseString = function(s) {
    let midpoint = s.length / 2;
    for (let i = 0; i < midpoint; i++) {
        let temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
    return s;
};