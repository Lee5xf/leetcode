/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [left, right]
function search(nums, target) {
    let mid, left = 0
    let right = nums.length - 1;
    while (left <= right) {
        mid = left + ((right - left) >> 1)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return -1
}


// @lc code=end

