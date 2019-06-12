var findErrorNums = function(nums) {
    let map = new Array(nums.length + 1).fill(false);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) ans[0] = nums[i];
        map[nums[i]] = true;
    }
    for (let i = 1; i < map.length; i++) {
        if (!map[i]) {
            ans[1] = i;
            return ans;
        }
    }
};