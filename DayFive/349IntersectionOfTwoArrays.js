var intersection = function(nums1, nums2) {
    let obj = {}
    let arr = [];
    for (let i = 0; i < nums1.length; i++) {
        obj[nums1[i]] = true;
    }
    for (let i = 0; i < nums2.length; i++) {
        if (obj[nums2[i]]) {
            arr.push(nums2[i]);
            delete obj[nums2[i]];
        }
    }
    return arr;
};