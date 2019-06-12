var countAndSay = function(n) {
    let previous = '1';
    for (let i = 1; i < n; i++) {
        let current = '';
        let value = previous[0];
        let count = 1;
        for (let j = 1; j < previous.length; j++) {
            if (previous[j] === value) {
                count++;
            } else {
                current += count + value;
                count = 1;
                value = previous[j];
            }
        }
        current += count + value;
        previous = current;
    }
    return previous;
};