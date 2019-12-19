// 两个数组的交集 II [350]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/26/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//   let res = []
//   for (let i = nums1.length - 1; i >= 0; i--) {
//     for (let j = nums2.length - 1; j >= 0; j--) {
//       if (nums1[i] === nums2[j]) {
//         res.push(nums1[i])
//         nums1.splice(i, 1)
//         nums2.splice(j, 1)
//       }
//     }
//   }
//   return res
// }

// 排序 双指针
// var intersect = function(nums1, nums2) {
//   const sortFun = (item1, item2) => item1 - item2
//   nums1.sort(sortFun)
//   nums2.sort(sortFun)
//   let res = []
//   let pNums1 = 0
//   let pNums2 = 0

//   while (pNums1 < nums1.length && pNums2 < nums2.length) {
//     if (nums1[pNums1] < nums2[pNums2]) {
//       pNums1++
//     } else if (nums1[pNums1] === nums2[pNums2]) {
//       res.push(nums1[pNums1])
//       pNums1++
//       pNums2++
//     } else {
//       pNums2 ++
//     }
//   }

//   return res
// }

// hash 映射
var intersect = function(nums1, nums2) {
  let map = new Map()
  let res = []
  for (const num of nums1) {
    let value = map.get(num) || 0
    map.set(num, value + 1)
  }
  for (const num of nums2) {
    let count = map.get(num) || 0
    if (count > 0) {
      res.push(num)
      map.set(num, count - 1)
    }
  }
  return res
}

module.exports = intersect
