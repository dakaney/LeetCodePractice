// var uncommonFromSentences = function(A, B) {
//     let result = {};
//     let ans = [];
//     let strA = A.split(' ');
//     let strB = B.split(' ');
//     for (let i = 0; i < strA.length; i++) {
//         result[strA[i]] = result[strA[i]] || 0;
//         result[strA[i]] += 1;
//     }
//     for (let i = 0; i < strB.length; i++) {
//         result[strB[i]] = result[strB[i]] || 0;
//         result[strB[i]] += 1;
//     }
//     for (let word in result) {
//         if (result[word] === 1) ans.push(word);
//     }
//     return ans;
// };

var uncommonFromSentences = function(A, B) {
    let result = {};
    let ans = [];
    (A + ' ' + B).split(' ').forEach(word => {
        result[word] = result[word] + 1 || 1
    })
    for (let word in result) {
        if (result[word] === 1) ans.push(word);
    }
    return ans;
};
