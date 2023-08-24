/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// 自己的
// var sortedSquares = function (nums) {
//     // 使用双指针
//     let size = nums.length - 1
//     let left = 0
//     let right = size, k = size
//     var result = []
//     while (left <= right && k >= 0) {
//         if (nums[left] * nums[left] <= nums[right] * nums[right]) {
//             result[k--] = nums[right] * nums[right]
//             right--
//         } else {
//             result[k--] = nums[left] * nums[left]
//             left++
//         }
//     }
//     return result
// }
// 卡尔的
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let n = nums.length;
    let res = new Array(n).fill(0);
    let i = 0, j = n - 1, k = n - 1;
    while (i <= j) {
        let left = nums[i] * nums[i],
            right = nums[j] * nums[j];
        if (left < right) {
            res[k--] = right;
            j--;
        } else {
            res[k--] = left;
            i++;
        }
    }
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortedSquares;
// @after-stub-for-debug-end