const { singleLinkedList } = require('./util/ListNode')
let solution = require('./solution/easy-22')

let testCase = singleLinkedList([1])
let testCase2 = 1
const res = solution(testCase, testCase2)

console.log('testCase', testCase)
console.log('res', JSON.stringify(res))
