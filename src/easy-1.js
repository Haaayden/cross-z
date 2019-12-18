// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/21/
// 从排序数组中删除重复项

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i-1]) {
      nums.splice(i, 1)
    }
  }
  return nums
}

module.exports = removeDuplicates