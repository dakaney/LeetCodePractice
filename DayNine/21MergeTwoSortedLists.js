var mergeTwoLists = function(l1, l2) {
    let newList = new ListNode(0);
    let current = newList;
    while (l1 || l2) {
        let takeL1 = true;
        if (l1 && l2) {
            if (l1.val > l2.val) {
                takeL1 = false;
            }
        } else if (l2) {
            takeL1 = false;
        } 
        if (takeL1) {
            current.next = l1;
            current = current.next;
            l1 = l1.next;
        } else {
            current.next = l2;
            current = current.next;
            l2 = l2.next;
        }
    }
    return newList.next;
};