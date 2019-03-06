var toGoatLatin = function(S) {
    let currentArr = S.split(' ');
    let additionalA = 'a'
    let vowel = ['a','e','i','o','u','A','E','I','O','U']
    for (let i = 0; i < currentArr.length; i++) {
        if (vowel.indexOf(currentArr[i][0]) >= 0) {
            currentArr[i] = currentArr[i] + 'ma' + additionalA;
        } else {
            currentArr[i] = currentArr[i].substring(1) + currentArr[i][0] + 'ma' + additionalA
        }
        additionalA += 'a'
    }
    return currentArr.join(' ')
};