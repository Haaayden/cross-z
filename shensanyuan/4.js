// https://leetcode-cn.com/problems/merge-two-sorted-lists/
const { ListNode } = require('../util/ListNode')

// 循环遍历
// var mergeTwoLists = function(l1, l2) {
//   let dummyHead = new ListNode()
//   let p = dummyHead

//   while (l1 !== null && l2 !== null) {
//     if (l1.val <= l2.val) {
//       p.next = l1
//       p = p.next
//       l1 = l1.next
//     } else {
//       p.next = l2
//       p = p.next
//       l2 = l2.next
//     }
//   }
//   if (l1 === null) p.next = l2
//   if (l2 === null) p.next = l1

//   return dummyHead.next
// }

// 递归
var mergeTwoLists = function(l1, l2) {
  function sortMerge(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    if (l1.val <= l2.val) {
      l1.next = sortMerge(l1.next, l2)
      return l1
    } else {
      l2.next = sortMerge(l1, l2.next)
      return l2
    }
  }

  return sortMerge(l1, l2)
}



module.exports = mergeTwoLists
