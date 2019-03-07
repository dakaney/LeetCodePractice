var dailyTemperatures = function(T) {
    let stack = [0];
    let result = new Array(T.length).fill(0);
    for (let i = 1; i < T.length; i++) {
        while (stack.length && T[i] > T[stack[stack.length -1]]) {
            let prev = stack.pop();
            result[prev] = i - prev;
        }
        stack.push(i)
    }
    return result
};