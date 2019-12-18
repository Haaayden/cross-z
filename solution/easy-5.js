// 只出现一次的数字 [136]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/25/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let isSingle = true
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) continue
//       if (nums[i] === nums[j]) {
//         isSingle = false
//         break
//       }
//     }
//     if (isSingle) return nums[i]
//   }
// }

// var singleNumber = function(nums) {
//   nums.sort()
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[0] != nums[1]) {
//       return nums[0]
//     } else if (nums[nums.length - 1] != nums[nums.length - 2]) {
//       return nums[nums.length - 1]
//     } else {
//       if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
//         return nums[i]
//       }
//     }
//   }
// }

// var singleNumber = function(nums) {
//   let num = 0
//   for (let i = 0; i < nums.length; i++) {
//     num ^= nums[i]
//   }
//   return num
// }

var singleNumber = function(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.delete(nums[i])) {
      map.set(nums[i], 1)
    }
  }
  return [...map.keys()][0]
}

module.exports = singleNumber
