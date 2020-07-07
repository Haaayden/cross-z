const { singleLinkedList } = require('./util/ListNode')
const { getBinaryTreeFromArray } = require('./util/TreeNode')

let solution = require('./solution/medium-35')

let testCase = getBinaryTreeFromArray([1, 2, 3, 4, 5, 6, 7])
// let testCase = getBinaryTreeFromArray([1,null,2,null,3])
// let testCase = getBinaryTreeFromArray([3,9,20,15,7])
// 5,5,8,4,6,
// let testCase2 = singleLinkedList([1, 3, 4])
// let testCase = [-4,0,7,4,9,-5,-1,0,-7,-1]
const res = solution(testCase)

console.log('testCase', testCase)
console.log('res', JSON.stringify(res))
