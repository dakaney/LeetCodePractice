var relativeSortArray = function(arr1, arr2) {
    let numObj = {'noMatch': []};
    let result = [];
    for (let i = 0; i < arr2.length; i++) {
        numObj[arr2[i]] = [];
    }
    for (let i = 0; i < arr1.length; i++) {
        if (numObj[arr1[i]]) {
            numObj[arr1[i]].push(arr1[i]);
        } else {
            numObj['noMatch'].push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        result.push(...numObj[arr2[i]]);
    }
    let restOfNums = numObj['noMatch'].sort((a,b) => a-b);
    result.push(...restOfNums);
    return result;
};