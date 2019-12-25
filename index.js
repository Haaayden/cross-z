const { singleLinkedList } = require('./util/ListNode')
const { getBinaryTreeFromArray } = require('./util/TreeNode')
let solution = require('./solution/easy-28')

// let testCase = getBinaryTreeFromArray([3,9,20,null,null,15,7])
let testCase = getBinaryTreeFromArray([10, 5, 15, null, null, 6, 20])
// let testCase2 = singleLinkedList([1, 3, 4])
const res = solution(testCase)

console.log('testCase', testCase)
console.log('res', JSON.stringify(res))
