var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let curCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            curCount += 1;
            count = Math.max(curCount, count);
        } else {
            curCount = 0;
        }
    }
    return count;
};