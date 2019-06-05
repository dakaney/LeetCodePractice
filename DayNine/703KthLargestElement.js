var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort((a,b) => b - a);
};

KthLargest.prototype.add = function(val) {
    let i = 0;
    while (val < this.nums[i]) {
        i++;
    }
    this.nums.splice(i, 0, val);
    return this.nums[this.k - 1]
};