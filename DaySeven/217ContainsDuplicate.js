var containsDuplicate = function(nums) {
    let contains = {};
    for (let i = 0; i < nums.length; i++) {
        if (!contains[nums[i]]) {
            contains[nums[i]] = true;
        } else {
            return true
        }
    }
    return false;
};