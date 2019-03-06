var fizzBuzz = function(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let curVal = '';
        if (i % 3 === 0) curVal += 'Fizz';
        if (i % 5 === 0) curVal += 'Buzz';
        if (i % 3 !== 0 && i % 5 !== 0) curVal += i;
        result.push(curVal)
    }
    return result;
};