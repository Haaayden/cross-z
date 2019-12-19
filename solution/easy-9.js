// 两数之和 [1]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/29/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   let map = new Map()
//   for (i = 0; i < nums.length; i++) {
//     map.set(nums[i], i)
//   }
//   for (i = 0; i < nums.length; i++) {
//     const j = map.get(target - nums[i])
//     if (j !== undefined && j !== i) {
//       return [i, j]
//     }
//   }
// }

var twoSum = function(nums, target) {
  let map = new Map()
  for (i = 0; i < nums.length; i++) {
    const j = map.get(target - nums[i])
    if (j !== undefined && j !== i) {
      return [i, j]
    }
    map.set(nums[i], i)
  }
}

module.exports = twoSum
