const { singleLinkedList } = require('./util/ListNode')
let solution = require('./solution/easy-26')

let testCase = singleLinkedList([3, 2, 0, -4])
// let testCase2 = singleLinkedList([1, 3, 4])
const res = solution(testCase)

console.log('testCase', testCase)
console.log('res', JSON.stringify(res))
