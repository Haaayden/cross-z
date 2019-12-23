// 回文链表 [234]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/45/

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
// var isPalindrome = function(head) {
//   let arr = []
//   while (head !== null) {
//     arr.push(head.val)
//     head = head.next
//   }
//   for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     if (arr[i] !== arr[j]) return false
//   }
//   return true
// }

// 使用快慢指针
const { ListNode } = require('../util/ListNode')
var isPalindrome = function(head) {
  if (head === null || head.next === null) return true

  let dummy = new ListNode(-1)
  dummy.next = head
  let fast = dummy
  let slow = dummy

  // 使用双指针寻找中间节点
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  // 将链表分成两段
  let back = slow.next
  slow.next = null
  let front = dummy.next

  // 反转后半段链表
  let prev = null
  while (back !== null) {
    let tmp = back.next
    back.next = prev
    prev = back
    back = tmp
  }

  // 比较前半段与反转后的后半段链表
  while (prev) {
    if (prev.val !== front.val) return false
    prev = prev.next
    front = front.next
  }
  return true
}

module.exports = isPalindrome
