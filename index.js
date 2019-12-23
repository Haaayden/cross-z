const { singleLinkedList } = require('./util/ListNode')
let solution = require('./solution/easy-24')

let testCase = singleLinkedList([1, 2, 4, 5])
let testCase2 = singleLinkedList([1, 3, 4])
const res = solution(testCase, testCase2)

console.log('testCase', testCase)
console.log('res', JSON.stringify(res))
