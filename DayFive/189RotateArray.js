var rotate = function(nums, k) {
    for (let i = k ; i > 0; i--) {
        let last = nums.pop();
        nums.unshift(last)
    }
};