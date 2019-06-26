var recoverFromPreorder = function(S) {
    let holders = [];
    let currentLevel = 0;
    let currentValue = '';
    for (let i = 0; i < S.length; i++){
        if (S[i] === '-') {
            currentLevel += 1;
        } else if (S[i+1] !== '-' && i !== S.length-1) {
            currentValue = currentValue + S[i];
        } else {
            currentValue = currentValue + S[i];
            let newNode = new TreeNode(currentValue);
            if (currentLevel !== 0) {
                let previousNode = holders[currentLevel - 1][holders[currentLevel - 1].length - 1]
                if (previousNode.left === null) previousNode.left = newNode
                else previousNode.right = newNode;
            }
            holders[currentLevel] = holders[currentLevel] || [];
            holders[currentLevel].push(newNode);
            currentLevel = 0;
            currentValue = '';
        }
    }
    return holders[0][0];
};