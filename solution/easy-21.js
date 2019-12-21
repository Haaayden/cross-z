// 删除链表中的节点 [237]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/41/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
}

module.exports = deleteNode
