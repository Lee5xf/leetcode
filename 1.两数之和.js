/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 先还是遍历nums数组，然后在哈希表中寻找target - x，如果不存在就把当前元素x和下标存入哈希表，如果存在就返回target - x和当前元素的下标
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {  //第一层循环
        const complement = target - nums[i];
        if (map.has(complement)) {   //判断complement是否在map中
            return [map.get(complement), i];    //存在的话返回两个数的下标
        } else {
            map.set(nums[i], i)   //不存在map中就将当前元素和下标存入map
        }
    }
};
// @lc code=end

