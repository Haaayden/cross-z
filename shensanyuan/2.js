// https://leetcode-cn.com/problems/reverse-linked-list-ii/

const { ListNode } = require('../util/ListNode')

// 遍历
// 将链表分为三部分
// 第一部分 [0, m-1] 将其尾结点指向中间区域的头节点  (保存头节点用于最后返回,保存尾节点用于连接第二部分)
// 第二部分 [m, n]   将其尾节点指向第三部分的头节点  (保存头节点用于连接第一部分,保存尾节点用于连接第三部分)
// 第三部分 [n+1, ]  (保存头节点用于连接第二部分)
// var reverseBetween = function(head, m, n) {
//   if (head === null || head.next === null) return head

//   let section1 = null
//   let section1Tail = null
//   let section2 = null
//   let section2Tail = null
//   let section3 = null

//   let curNode = head
//   let index = 1

//   while (curNode !== null) {

//     if (index < m) {
//       // 第一部分,需要保存尾节点 section1
//       if (!section1) section1 = curNode
//       section1Tail = curNode
//       curNode = curNode.next
//     } else if (index <= n) {
//       // 反转区域,需要保存头及尾节点
//       let tmp = curNode.next

//       curNode.next = section2
//       section2 = curNode

//       curNode = tmp

//       // 保存 sction2 尾结点
//       if (section2.next === null) section2Tail = section2
//     } else {
//       // 剩余部分保存在 curNode
//       section3 = curNode
//       break
//     }

//     index++
//   }

//   // 当 m = 1 时,直接将 section 2 和 section 3 拼接即可
//   if (section1 === null) {
//     section2Tail.next = section3
//     return section2
//   }

//   section1Tail.next = section2
//   section2Tail.next = section3

//   return section1
// }

// 递归
var reverseBetween = function(head, m, n) {
  // 反转链表方法
  function reverse(curNode, preNode) {
    if (!curNode) return curNode

    let nextNode = curNode.next
    curNode.next = preNode

    reverse(nextNode, curNode)
  }
  let p = res = new ListNode()
  res.next = head
  for (let i = 0; i < m - 1; i++) {
    p = p.next
  }
  let front = p             // m - 1 节点
  let start = front.next    // m 节点
  for (let i = m - 1; i < n; i++) {
    p = p.next
  }
  let end = p               // n 节点
  let behind = p.next       // n + 1 节点

  end.next = null
  reverse(start, null)

  start.next = behind
  front.next = end

  return res.next
}

module.exports = reverseBetween
