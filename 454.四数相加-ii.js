/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 * 本题解题步骤：
首先定义 一个unordered_map，key放a和b两数之和，value 放a和b两数之和出现的次数。
遍历大A和大B数组，统计两个数组元素之和，和出现的次数，放到map中。
定义int变量count，用来统计 a+b+c+d = 0 出现的次数。
在遍历大C和大D数组，找到如果 0-(c+d) 在map中出现过的话，就用count把map中key对应的value也就是出现次数统计出来。
最后返回统计值 count 就可以了
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    // 定义一个map
    const mymap = new Map()
    let count = 0;
    // 遍历AB数组，统计两个数组元素之和和出现的次数，放入map
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            const sum = n1 + n2
            mymap.set(sum, (mymap.get(sum) || 0) + 1)
        }
    }
    // 遍历CD，找到0-（c+d）=0的键值
    for (const n3 of nums3) {
        for (const n4 of nums4) {
            const num = n3 + n4
            // count把map中key对应的value也就是出现次数统计出来
            count += mymap.get(0 - num) || 0
        }
    }
    return count
};
// @lc code=end

