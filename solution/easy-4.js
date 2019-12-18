// 存在重复 [217]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/24/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true
    }
  }
  return false
}

// 另一种思路先排序再查找是否有相同的相邻元素
// Set 不考虑

module.exports = containsDuplicate
