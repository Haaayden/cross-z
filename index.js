const { singleLinkedList } = require('./util/ListNode')
let solution = require('./solution/easy-23')

let testCase = singleLinkedList([1, 2, 3, 4, 5])
let testCase2 = 1
const res = solution(testCase, testCase2)

console.log('testCase', testCase)
console.log('res', JSON.stringify(res))
