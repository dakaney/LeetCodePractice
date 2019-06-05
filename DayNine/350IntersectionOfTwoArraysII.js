var intersect = function(nums1, nums2) {
    let ans = [];
    let nums1Storage = {};
    for (let i = 0; i < nums1.length; i++) {
        nums1Storage[nums1[i]] = nums1Storage[nums1[i]] + 1 || 1;
    }
    for (let j = 0; j < nums2.length; j++) {
        if (nums1Storage[nums2[j]]) {
            ans.push(nums2[j]);
            nums1Storage[nums2[j]] -= 1;
        }
    }
    return ans;
};