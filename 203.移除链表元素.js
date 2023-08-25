/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start


// * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
//  */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// var removeElements = function (head, val) {
//     // 删除头结点
//     while (head != null && head.val === val) {
//         head = head.next
//     }
//     let p = head
//     // 删除中间结点
//     while (p) {
//         let q = p.next
//         if (q !== null && q.val === val) {
//             p.next = q.next
//         } else {
//             p = p.next
//         }
//     }
//     return head
// };
var removeElements = function (head, val) {
    const dummyHead = new ListNode(0, head)
    let pre = dummyHead
    while (pre.next) {
        if (pre.next.val === val) {
            pre.next = pre.next.next
            continue
        }
        pre = pre.next

    }
    return head;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeElements;
// @after-stub-for-debug-end