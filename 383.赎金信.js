/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 哈希解法
 * 因为题目说只有小写字母，那可以采用空间换取时间的哈希策略，用一个长度为26的数组来记录magazine里字母出现的次数。
*  然后再用ransomNote去验证这个数组是否包含了ransomNote所需要的所有字母。
 */
var canConstruct = function (ransomNote, magazine) {
    const base = "a".charCodeAt();
    // 创建一个哈希数组
    const myset = new Array(26).fill(0)
    // 使用 JavaScript 中的 charCodeAt 方法。这个方法返回指定字符的 ASCII 值。
    for (n1 of magazine) {
        // 记录magazine各字符出现次数
        myset[n1.charCodeAt() - base]++
    }
    // 对应的字符个数做--操作
    for (n2 of ransomNote) {
        const index = n2.charCodeAt() - base;
        // 如果没记录直接返回
        if (!myset[index]) return false
        myset[index]--
    }
    return true
};
// @lc code=end

