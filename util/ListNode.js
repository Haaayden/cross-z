function ListNode(val = null) {
  this.val = val
  this.next = null
}
exports.ListNode = ListNode

function singleLinkedList(list) {
  let res = new ListNode(list[0])
  let tmp = res
  for (let i = 1; i < list.length; i++) {
    tmp.next = new ListNode(list[i])
    tmp = tmp.next
  }
  return res
}
exports.singleLinkedList = singleLinkedList
