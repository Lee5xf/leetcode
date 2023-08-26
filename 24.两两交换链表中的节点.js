/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let ret = new ListNode(0, head)   // 创建虚拟结点
    let node = ret
    while (node.next != null && node.next.next != null) {
        let p = node.next
        let q = p.next
        p.next = q.next
        q.next = p
        node.next = q
        node = p
    }
    return ret.next
};
// @lc code=end

