/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
// 假设链表中的所有节点下标从 0 开始。
class LinkNode {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

/**
 * 单链表 储存头尾节点 和 节点数量
 */
var MyLinkedList = function () {
    this._size = 0
    this._tail = null
    this._head = null
};


/** 
 * @param {number} index
 * @return {number}
 * 返回指定下标的结点
 */
MyLinkedList.prototype.getNode = function (index) {
    if (index < 0 || index >= this._size) {
        return null
    }
    // 创建虚拟结点
    let cur = new LinkNode(0, this._head)
    // 返回的是下标为index的结点，该题中下标从0开始，故循环条件为index>=0
    while (index >= 0) {
        cur = cur.next
        index--
    }
    return cur
};
/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this._size) {
        return -1
    }
    // 获取当前结点
    return this.getNode(index).val
};

/** 
 * @param {number} val
 * @return {void}
 * 采取头插法
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new LinkNode(val, this._head)
    this._head = node
    this._size++
    // 当尾指针为空的时候指向node
    while (!this._tail) {
        this._tail = node
    }
};

/** 
 * @param {number} val
 * @return {void}
 * 采用尾插法
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new LinkNode(val, null)
    this._size++
    if (this._tail) {
        this._tail.next = node;
        this._tail = node;
        return;
    }
    this._tail = node;
    this._head = node;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    // 大于链表长度的情况
    if (index > this._size) return
    // 等于链表长度的情况
    if (index === this._size) {
        this.addAtTail(val)
        return  // 插入完成后直接返回
    }
    // 插入位置为第一个元素之前的情况
    if (index <= 0) {
        this.addAtHead(val)
        return  // 插入完成后直接返回
    }
    // 查找index-1下标的结点
    let pre = this.getNode(index - 1)
    // 创建结点
    const node = new LinkNode(val, pre.next)
    pre.next = node
    this._size++
};

/** 
 * @param {number} index
 * @return {void}
 * 删除下标为index的结点
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this._size) return;
    if (index === 0) {
        this._head = this._head.next;
        // 如果删除的这个节点同时是尾节点，要处理尾节点
        if (index === this._size - 1) {
            this._tail = this._head
        }
        this._size--;
        return;
    }
    // 获取目标节点的上一个的节点
    const node = this.getNode(index - 1);
    node.next = node.next.next;
    // 处理尾节点
    if (index === this._size - 1) {
        this._tail = node;
    }
    this._size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

