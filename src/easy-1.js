// 从排序数组中删除重复项 [26]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/21/

/**
 * @param {number[]} nums
 * @return {number}
 */
// function removeDuplicates(nums) {
//   if (nums.length <= 1) return nums.length

//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (i - 1 >= 0 && nums[i - 1] === nums[i]) {
//       nums.splice(i, 1)
//     }
//   }
//   return nums.length
// }

// 双指针
function removeDuplicates(nums) {
  if (nums.length <= 1) return nums.length

  let i = 0   // 慢指针
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  nums.splice(i + 1)
  return i + 1
}


module.exports = removeDuplicates
