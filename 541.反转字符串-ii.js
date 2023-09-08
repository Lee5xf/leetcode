/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 简洁版本
// var reverseStr = function (s, k) {
//     const len = s.length;
//     let resArr = s.split("");
//     for(let i = 0; i < len; i += 2 * k) {  // 每隔 2k 个字符的前 k 个字符进行反转
//         let l = i - 1, r = i + k > len ? len : i + k;
//         while(++l < --r) [resArr[l], resArr[r]] = [resArr[r], resArr[l]];
//     }
//     return resArr.join("");
// };

var reverseStr = function (s, k) {
    const len = s.length
    // JavaScript 中的字符串是不可变的，所以你不能像数组一样直接通过索引来修改字符串中的字符
    arr = s.split('')
    for (let i = 0; i < len; i += (2 * k)) {
        // 1. 每隔 2k 个字符的前 k 个字符进行反转
        // 2. 剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符
        if ((len - i) <= k) {
            let l = i, r = len - 1
            arr = reverseString(arr, l, r)
        } else {
            let l = i, r = l + k - 1
            arr = reverseString(arr, l, r)
        }

    }
    return arr.join('');
};
var reverseString = function (s, ll, rr) {
    let l = ll, r = rr
    while (l < r) {
        const temp = s[l]
        s[l++] = s[r]
        s[r--] = temp
    }
    return s
};
// @lc code=end

