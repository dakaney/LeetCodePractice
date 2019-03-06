var levelOrder = function(root) {
    if (root === null) return [];
    let finalResult = [];
    let currentRow = [];
    let toBeViewed = [root, 'end of row'];
    while (toBeViewed.length > 1) {
        let currentNode = toBeViewed.shift();
        if (currentNode === 'end of row') {
            finalResult.push(currentRow.slice())
            currentRow = [];
            toBeViewed.push('end of row');
        } else {
            toBeViewed.push(...currentNode.children)
            currentRow.push(currentNode.val);
        }
    }
    finalResult.push(currentRow);
    return finalResult;
};