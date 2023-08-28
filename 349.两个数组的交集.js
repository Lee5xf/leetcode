/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 首先将 nums1 转换为一个 Set 对象以去除重复元素，
// 然后遍历 nums2 数组，如果 nums1Set 中包含当前元素，就将它添加到 resSet 中。
// 最后，将 resSet 转换为一个数组并返回。这个版本的代码更直观和易读。
var intersection = function (nums1, nums2) {
    const nums1Set = new Set(nums1);
    const reSet = new Set();
    for (const num of nums2) {
        if (nums1Set.has(num)) {
            reSet.add(num)
        }
    }
    // 循环 比 迭代器快
    // for(let i = nums2.length - 1; i >= 0; i--) {
    //     nums1Set.has(nums2[i]) && reSet.add(nums2[i]);
    // }
    return Array.from(reSet);

};
// @lc code=end

