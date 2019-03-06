var matrixReshape = function(nums, r, c) {
    if (nums.length * nums[0].length !== r * c) return nums;
    let values = nums.join().split(',')
    let finalResult = [];
    let currentRow = [];
    for (let i = 0; i < values.length; i++) {
        currentRow.push(values[i]);
        if (currentRow.length === c) {
            finalResult.push(currentRow.slice());
            currentRow = [];
        }
    }
    return finalResult;
};