// 环形链表
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/46/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let map = new Map()
  let i = 0
  while (head) {
    if (map.get(head) !== undefined) return true
    map.set(head, i)
    head = head.next
    i++
  }
  return false
}

module.exports = hasCycle
