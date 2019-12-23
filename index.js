const { singleLinkedList } = require('./util/ListNode')
let solution = require('./solution/easy-25')

let testCase = singleLinkedList([1, 2, 3, 4, 5, 6])
// let testCase2 = singleLinkedList([1, 3, 4])
const res = solution(testCase)

console.log('testCase', testCase)
console.log('res', JSON.stringify(res))
