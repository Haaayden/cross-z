// 合并两个有序数组 [88]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/8/sorting-and-searching/52/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let res = []
  nums1.splice(m)
  m = nums1.length

  let p1 = 0
  let p2 = 0
  while (p1 < m && p2 < n) {
    if (nums1[p1] <= nums2[p2]) {
      res.push(nums1[p1])
      p1++
    } else {
      res.push(nums2[p2])
      p2++
    }
  }
  res = res.concat(nums1.splice(p1), nums2.splice(p2))
  nums1.splice(0)
  nums1.push.apply(nums1, res)
}

module.exports = merge
