/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let l = 0, r = s.length - 1
    while (l < r) {
        const temp = s[l]
        s[l++] = s[r]
        s[r--] = temp
    }
};

// var reverse = function (s) {
//     let l = -1, r = s.length;
//     while (++l < --r) [s[l], s[r]] = [s[r], s[l]];
// };
// @lc code=end

