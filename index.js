const { singleLinkedList } = require('./util/ListNode')
const { getBinaryTreeFromArray } = require('./util/TreeNode')

let solution = require('./test')

// let testCase = getBinaryTreeFromArray([1, 2, 3, 4, 5, 6, 7])
// let testCase = getBinaryTreeFromArray([1,2,null,3,null,4,null,5])
// let testCase = getBinaryTreeFromArray([3,9,20,15,7])
// 5,5,8,4,6,
// let testCase2 = singleLinkedList([1, 3, 4])
let testCase = [ 5, 9, 1, 4, 3, 6 ]
const res = solution(testCase)

console.log('testCase', testCase)
console.log('res', JSON.stringify(res))
