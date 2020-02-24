// https://leetcode-cn.com/problems/reverse-linked-list/ 反转链表

// 遍历
// var reverseList = function(head) {
//   if (head === null || head.next === null) return head

//   let currentNode = head.next

//   head.next = null

//   while (currentNode !== null) {
//     let tmp = currentNode.next

//     currentNode.next = head
//     head = currentNode

//     currentNode = tmp
//   }
//   return head
// }

// 递归 1
// var reverseList = function(head) {
//   if (head === null || head.next === null) return head
//   let p = reverseList(head.next)
//   head.next.next = head
//   head.next = null
//   return p
// }

// 递归 2
var reverseList = function(head) {
  let res
  function reverse(curNode, preNode) {
    if (curNode === null) return res = preNode
    let tmp = curNode.next

    curNode.next = preNode

    reverse(tmp, curNode)
  }
  reverse(head, null)
  return res
}

module.exports = reverseList
