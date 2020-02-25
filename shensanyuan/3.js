// https://leetcode-cn.com/problems/swap-nodes-in-pairs/

const { ListNode } = require('../util/ListNode')

// 循环遍历
// var swapPairs = function(head) {
//   if (head === null || head.next === null) return head

//   let dummyHead = new ListNode()
//   let p = dummyHead
//   dummyHead.next = head

//   let node1, node2
//   while ((node1 = p.next) && (node2 = p.next.next)) {
//     node1.next = node2.next
//     node2.next = node1

//     p.next = node2  // 使dummyHead.next 指向 node2, 一次执行后与 dummyHead 切断联系
//     p = node1
//   }
//   return dummyHead.next
// }

// 递归
var swapPairs = function(head) {
  if (head === null || head.next === null) return head

  let node1 = head
  let node2 = head.next

  node1.next = swapPairs(node2.next)
  node2.next = node1
  return node2
}

module.exports = swapPairs
