/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let slowindex = 0
    for (let fastindex = 0; fastindex < nums.length; fastindex++) {
        if (val != nums[fastindex]) {
            nums[slowindex++] = nums[fastindex]
        }
    }
    return slowindex;
}
// @lc code=end

