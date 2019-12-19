// 旋转图像 [48]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/31/
// https://blog.csdn.net/romeo12334/article/details/82081156

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let tmp
  let length = matrix.length

  for (i = 0; i < parseInt(length / 2); i++) {
    for (j = i; j < length - 1 - i; j++) {
      tmp = matrix[i][j]
      matrix[i][j] = matrix[length - j - 1][i]
      matrix[length - j - 1][i] = matrix[length - i - 1][length - j - 1]
      matrix[length - i - 1][length - j - 1] = matrix[j][length - i - 1]
      matrix[j][length - i - 1] = tmp
    }
  }
}
module.exports = rotate
