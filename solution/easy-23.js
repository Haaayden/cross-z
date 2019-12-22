// 反转链表 [206]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/43/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) return head

  // p 为当前操作的节点
  let p = head.next
  //  反转后第一个节点必定 next 为 null
  head.next = null

  let tmp
  while (p !== null) {
    // tmp 存储下一个要操作的节点
    tmp = p.next

    // 将当前操作节点 next 指向反转后的结果节点
    p.next = head
    // 使用 head 保存反转结果
    head = p

    // 将下一个要操作的节点取出来交给 p
    p = tmp
  }
  return head
}

module.exports = reverseList
