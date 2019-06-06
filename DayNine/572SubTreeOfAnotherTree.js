var isSubtree = function(s, t) {
    if (!s && !t) return true;
    if (!s || !t) return false;
    let foundSubTree = false;
    let toView = [s];
    while (toView.length) {
        let currentS = toView.shift();
        if (!currentS) continue;
        if (currentS.val === t.val) foundSubTree = foundSubTree || isSameTree(currentS, t);
        toView.push(currentS.left, currentS.right);
    }
    return foundSubTree;
};

let isSameTree = (s, t) => {
    let toViewS = [s];
    let toViewT = [t];
    while (toViewS.length || toViewT.length) {
        let curS = toViewS.pop();
        let curT = toViewT.pop();
        if (!curS && !curT) continue;
        if (!curS || !curT) return false;
        if (curS.val !== curT.val) return false;
        toViewS.push(curS.left, curS.right);
        toViewT.push(curT.left, curT.right);
    }
    return true;
}