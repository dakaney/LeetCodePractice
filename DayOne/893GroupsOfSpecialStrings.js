var numSpecialEquivGroups = function(A) {
    let result = {};
    let count = 0;
    A.forEach(word => {
        let odd = [];
        let even = [];
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                even.push(word[i]);
            } else {
                odd.push(word[i]);
            }
        }
        odd = odd.sort();
        even = even.sort();
        let ans = even.join('') + odd.join('');
        if (!result[ans]) count += 1;
        result[ans] = true;
    })
    return count;
};