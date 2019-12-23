// 合并两个有序链表 [21]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/44/

const { ListNode } = require('../util/ListNode')

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let prehead = new ListNode(null)

  let prev = prehead
  while(l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 === null ? l2 : l1
  return prehead
}

module.exports = mergeTwoLists
