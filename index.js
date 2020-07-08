const { singleLinkedList } = require('./util/ListNode')
const { getBinaryTreeFromArray, TreeNode } = require('./util/TreeNode')

let solution = require('./pingzi/8')

// let testCase = getBinaryTreeFromArray([1, 2, 3, 4, 5, 6, 7])
// let testCase = getBinaryTreeFromArray([3,5,1,6,2,0,8,null,null,7,4])
// let testCase = getBinaryTreeFromArray([3,9,20,15,7])
// 5,5,8,4,6,
// let testCase2 = singleLinkedList([1, 3, 4])
let testCase = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}]
// let testCase = [undefined,undefined, null,null, NaN, NaN,'NaN']
const res = solution(testCase)

console.log('testCase', testCase)
// console.log('res', JSON.stringify(res))
console.log('res', res)
