/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    //滑动窗口法
    let size = nums.length
    let start = 0;
    let count = 0;
    let min = Infinity
    for (let end = 0; end < size; end++) {
        count += nums[end]
        while (count >= target) {
            min = Math.min(min, end - start + 1);
            count -= nums[start]
            start++
        }
    }
    return min === Infinity ? 0 : min
};
// 暴力法
// var minSubArrayLen = function (target, nums) {
//     //快慢双指针
//     let slow = 0;
//     let count = 0;
//     let min = Infinity
//     for (let fast = 0; fast < nums.length; fast++) {
//         count += nums[fast]
//         if (count >= target) {
//             min = Math.min(min, fast - slow + 1);
//             count = 0
//             fast = slow
//             slow++

//         }
//     }
//     if (min == Infinity) {
//         return 0
//     } else {
//         return min
//     }
// };
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minSubArrayLen;
// @after-stub-for-debug-end