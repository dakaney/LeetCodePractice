var dominantIndex = function(nums) {
    let largest = 0;
    let second = 0;
    let largeIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            second = largest;
            largest = nums[i];
            largeIndex = i;
        } else if (nums[i] > second) {
            second = nums[i];
        }
    }
    if (largest >= 2 * second) return largeIndex;
    return -1;
};