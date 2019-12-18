// 旋转数组 [189]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/23/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const length = nums.length
  k = k % length
  for (let i = 0; i <= length - 1; i++) {
    if (i < length - k) {
      nums.push(nums[i])
    }
  }
  nums.splice(0, length - k)
}

module.exports = rotate
