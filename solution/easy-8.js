// 移动零 [283]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/28/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   for (i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1)
//       nums.push(0)
//     }
//   }
// }

// 双指针
var moveZeroes = function(nums) {
  let lastNotZeroIndex = 0
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNotZeroIndex] = nums[i]
      lastNotZeroIndex++
    }
  }

  for (let i = lastNotZeroIndex; i < nums.length; i++) {
    nums[i] = 0
  }
}

module.exports = moveZeroes
