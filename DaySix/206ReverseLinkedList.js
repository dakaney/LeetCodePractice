//recursive
var reverseList = function(head, prev) {
    if (!head) return head;
    let next = head.next;
    head.next = prev;
    if (!next) return head;
    return reverseList(next, head);
};

// Iteratively
// var reverseList = function(head) {
//     let prevNode = null;
//     let curNode = head;
//     while (curNode) {
//         let nextNode = curNode.next
//         curNode.next = prevNode;
//         prevNode = curNode;
//         curNode = nextNode;
//     }
//     return prevNode;
// };