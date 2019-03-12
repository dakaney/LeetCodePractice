var deleteNode = function(node) {
    let cur = node;
    let next = cur.next;
    while (cur) {
        cur.val = next.val;
        next = next.next;
        if (!next) cur.next = null;
        cur = cur.next;
    }
};