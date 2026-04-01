/**
 * Definition for singly-linked list.
 */
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//    }
// }

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let node = new ListNode(-1);
        let current = node;
        
        let l1 = list1;
        let l2 = list2;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        if (l1) {
            current.next = l1;
        }
        if (l2) {
            current.next = l2;
        }
        return node.next;
    }
}
