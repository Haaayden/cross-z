// 打乱数组，洗牌算法
// https://leetcode-cn.com/problems/shuffle-an-array/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  // 浅拷贝
  const nums = this.nums.slice()

  for (let i = nums.length - 1; i >= 0; i--) {
    const randIndex = Math.floor(Math.random()*(i + 1))
    swap(nums, i, randIndex)
  }
  return nums
};

function swap(list, i, j) {
  const tmp = list[i]
  list[i] = list[j]
  list[j] = tmp
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

module.exports = Solution
