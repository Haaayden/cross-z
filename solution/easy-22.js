// 删除链表的倒数第 N 个节点
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/42/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//   let length = 1
//   let node = head
//   while (node.next !== null) {
//     node = node.next
//     length++
//   }

//   let deleteNodePrev = head
//   if (length === 1 && length === n) return null
//   // 如果删除的是第一个元素
//   if (length === n) return head.next
//   for (let i = 1; i < length - n; i++) {
//     deleteNodePrev = deleteNodePrev.next
//   }
//   deleteNodePrev.next = deleteNodePrev.next && deleteNodePrev.next.next
//   return head
// }

var removeNthFromEnd = function(head, n) {
  let tmp = head

  while (n--) {
    tmp = tmp.next
  }

  let cursor = head
  if (tmp === null) return head.next
  while (tmp.next !== null) {
    tmp = tmp.next
    cursor = cursor.next
  }
  // 删除
  cursor.next = cursor.next.next
  return head
}

module.exports = removeNthFromEnd
