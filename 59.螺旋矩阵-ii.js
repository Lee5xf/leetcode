/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let startX = 0
    let startY = 0;   // 起始位置
    let loop = Math.floor(n / 2);   // 旋转圈数
    let mid = n >> 1// 中间位置
    let offset = 1;    // 控制每一层填充元素个数
    let count = 1;     // 更新填充数字
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

    while (loop--) {
        let i = startX
        let j = startY
        // 上行从左到右（左闭右开）
        for (; j < n - offset; j++) {
            res[startX][j] = count++;
        }
        // 右列从上到下（左闭右开）
        for (; i < n - offset; i++) {
            res[i][j] = count++;
        }
        // 下行从右到左（左闭右开）
        for (; j > startY; j--) {
            res[i][j] = count++;
        }
        // 左列做下到上（左闭右开）
        for (; i > startX; i--) {
            res[i][j] = count++;
        }

        // 更新起始位置
        startX++;
        startY++;

        // 更新offset
        offset++;
    }
    // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
    if (n % 2 === 1) {
        res[mid][mid] = count;
    }
    return res;
};
// @lc code=end

