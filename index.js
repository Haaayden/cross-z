const { singleLinkedList } = require('./util/ListNode')
const { getBinaryTreeFromArray } = require('./util/TreeNode')
let solution = require('./solution/easy-26')

let testCase = getBinaryTreeFromArray([3,9,20,null,null,15,7])
// let testCase2 = singleLinkedList([1, 3, 4])
// const res = solution(testCase)

console.log('testCase', testCase)
console.log('res', JSON.stringify(res))
