var averageOfLevels = function(root) {
    if (root === null) return [];
    let finalResult = [];
    let currentRow = 0;
    let currentRowCount = 0;
    let toBeViewed = [root, 'end of row'];
    while (toBeViewed.length > 1) {
        let currentNode = toBeViewed.shift();
        if (currentNode === 'end of row') {
            finalResult.push(currentRow / currentRowCount);
            currentRow = 0;
            currentRowCount = 0;
            toBeViewed.push('end of row');
        } else {
            currentRow += currentNode.val;
            currentRowCount += 1;
            if (currentNode.left) toBeViewed.push(currentNode.left)
            if (currentNode.right) toBeViewed.push(currentNode.right);
        }
    }
    finalResult.push(currentRow / currentRowCount);
    return finalResult;
};