var compress = function(chars) {
    let i = 0, j = 0;
    while (i < chars.length) {
        if (chars[j] === chars[i]) {
            j++;
        } else if (j > i + 1) {
            const nums = (j - i).toString().split('');
            chars.splice(i + 1, j - i - 1, ...nums);
            j = i = i + 1 + nums.length;
        } else if (j = i + 1) {
            i = j;
            j++;
        }
    }
    return chars.length;
};