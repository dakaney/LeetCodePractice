var nextGreaterElement = function(nums1, nums2) {
    let nextNumberStorage = {};
    let finalResult = [];
    for (let i = 0; i < nums2.length; i++) {
        let nextVal = i+1;
        while (nextVal < nums2.length) {
            if (nums2[i] < nums2[nextVal]) {
                nextNumberStorage[nums2[i]] = nums2[nextVal];
                break;
            }
            nextVal++;
        }
        if (nextNumberStorage[nums2[i]] === undefined) nextNumberStorage[nums2[i]] = -1
    }
    for (let i = 0; i < nums1.length; i++) {
        finalResult.push(nextNumberStorage[nums1[i]]);
    } 
    return finalResult;
};