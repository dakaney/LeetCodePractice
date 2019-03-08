var moveZeroes = function(nums) {
    let curPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[curPos] = nums[i];
            curPos += 1;
        }
    }
    for (let i = curPos; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};