/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 首先将数组排序
然后有一层for循环，i从下标0的地方开始，同时定一个下标left 定义在i+1的位置上，定义下标right 在数组结尾的位置上。
依然还是在数组中找到 abc 使得a + b +c =0，我们这里相当于 a = nums[i]，b = nums[left]，c = nums[right]。

接下来如何移动left 和right呢， 如果nums[i] + nums[left] + nums[right] > 0 就说明 此时三数之和大了，因为数组是排序后了，所以right下标就应该向左移动，这样才能让三数之和小一些。

如果 nums[i] + nums[left] + nums[right] < 0 说明 此时 三数之和小了，left 就向右移动，才能让三数之和大一些，直到left与right相遇为止。
 */
var threeSum = function (nums) {
    const result = [], len = nums.length
    // 对数组进行排序。变成升序序列
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 1; i++) {
        let l = i + 1, r = len - 1
        // 第一个数大于0，直接返回
        if (nums[i] > 0) return result
        // 对相邻两个重复值进行去重
        if (nums[i] == nums[i - 1]) continue
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]
            // 小于0，l指针右移
            if (sum < 0) l++
            else if (sum > 0) r--  // 大于0，r指针左移
            else {
                // 加入结果数组
                result.push([nums[i], nums[l], nums[r]])
                // 进行去重操作
                while (l < r && nums[l] == nums[l + 1]) l++
                while (l < r && nums[r] == nums[r - 1]) r--
                // 移动指针，此时肯定不能只移动l了，因为这是升序的
                l++
                r--
            }
        }
    }
    return result
};
// @lc code=end

