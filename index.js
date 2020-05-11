const { singleLinkedList } = require('./util/ListNode')
const { getBinaryTreeFromArray } = require('./util/TreeNode')

let solution = require('./sort/quick')

// let testCase = getBinaryTreeFromArray([3,9,20,null,null,15,7])
let testCase = [2, 1, 7, 9, 5, 8]
// 5,5,8,4,6,
// let testCase2 = singleLinkedList([1, 3, 4])
const res = solution(testCase)

console.log('testCase', testCase)
console.log('res', JSON.stringify(res))
