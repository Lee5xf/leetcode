/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const res = [], len = nums.length
    if (len < 4) return []   // 长度小于4
    // 1.排序
    nums = nums.sort((a, b) => a - b)
    // 2. 注意i的边界，如果出现[2,2,2,2,2]的情况，这种就会出现错误，因为会一直执行去重到最后一步
    for (let i = 0; i < len - 3; i++) {
        // 剪枝处理
        if (nums[i] > target && nums[i] >= 0) {
            break; // 这里使用break，统一通过最后的return返回
        }
        // 对i去重
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < len - 2; j++) {
            // 2级剪枝处理
            if (nums[i] + nums[j] > target && nums[i] + nums[j] >= 0) {
                break;
            }
            // 对j去重
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            let l = j + 1, r = len - 1
            while (l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r]
                if (sum < target) l++
                else if (sum > target) r--
                else {
                    res.push([nums[i], nums[j], nums[l], nums[r]])
                    // 对nums[left]和nums[right]去重
                    while (l < r && nums[l] === nums[l + 1]) l++
                    while (l < r && nums[r] === nums[r - 1]) r--
                    // 找到答案时，双指针同时收缩
                    l++
                    r--
                }
            }
        }
    }
    return res
};
// /**
//  *  nsum通用解法，支持2sum，3sum，4sum...等等
//  *  时间复杂度分析：
//  *  1. n = 2时，时间复杂度O(NlogN)，排序所消耗的时间。、
//  *  2. n > 2时，时间复杂度为O(N^n-1)，即N的n-1次方，至少是2次方，此时可省略排序所消耗的时间。举例：3sum为O(n^2)，4sum为O(n^3)
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//     // nsum通用解法核心方法
//     function nSumTarget(nums, n, start, target) {
//         // 前提：nums要先排序好
//         let res = [];
//         if (n === 2) {
//             res = towSumTarget(nums, start, target);
//         } else {
//             for (let i = start; i < nums.length; i++) {
//                 // 递归求(n - 1)sum
//                 let subRes = nSumTarget(
//                     nums,
//                     n - 1,
//                     i + 1,
//                     target - nums[i]
//                 );
//                 for (let j = 0; j < subRes.length; j++) {
//                     res.push([nums[i], ...subRes[j]]);
//                 }
//                 // 跳过相同元素
//                 while (nums[i] === nums[i + 1]) i++;
//             }
//         }
//         return res;
//     }

//     function towSumTarget(nums, start, target) {
//         // 前提：nums要先排序好
//         let res = [];
//         let len = nums.length;
//         let left = start;
//         let right = len - 1;
//         while (left < right) {
//             let sum = nums[left] + nums[right];
//             if (sum < target) {
//                 while (nums[left] === nums[left + 1]) left++;
//                 left++;
//             } else if (sum > target) {
//                 while (nums[right] === nums[right - 1]) right--;
//                 right--;
//             } else {
//                 // 相等
//                 res.push([nums[left], nums[right]]);
//                 // 跳过相同元素
//                 while (nums[left] === nums[left + 1]) left++;
//                 while (nums[right] === nums[right - 1]) right--;
//                 left++;
//                 right--;
//             }
//         }
//         return res;
//     }
//     nums.sort((a, b) => a - b);
//     // n = 3，此时求3sum之和
//     return nSumTarget(nums, 3, 0, 0);
// };
// @lc code=end

