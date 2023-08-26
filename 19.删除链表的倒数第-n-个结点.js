/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 * 让快指针先走n步，然后快慢指针一起走，当快指针走到最后一个结点的时候，慢指针刚好指向的是要删除结点的前一个结点。另外使用虚拟头结点可以很好地解决第一个结点的情况。
 */
var removeNthFromEnd = function (head, n) {
    let ret = new ListNode(0, head)
    let slow = fast = ret
    while (n--) fast = fast.next
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return ret.next
};
// @lc code=end

