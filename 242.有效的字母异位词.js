/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 在 JavaScript 中，字符 'a' 并不像其他编程语言中一样直接与整数相减。
// 相反，JavaScript 中的字符是 Unicode 字符，
// 所以你需要使用` charCodeAt()` 方法来获取字符的 Unicode 编码。
var isAnagram = function (s, t) {
    if (s.length != t.length) return false
    let hash = new Array(26).fill(0)
    let base = 'a'.charCodeAt()
    for (let i = 0; i < s.length; i++) {
        hash[s.charCodeAt(i) - base]++
    }
    for (let i = 0; i < t.length; i++) {
        hash[t.charCodeAt(i) - base]--
    }
    for (item of hash) {
        if (item != 0)
            return false
    }
    return true
};
// @lc code=end

