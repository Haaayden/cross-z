let solution = require('./solution/easy-11')

let testCase = [
  [ 5, 1, 9,11,12],
  [ 2, 4, 8,10,19],
  [13, 3, 6, 7, 18],
  [15,14,12,16, 22],
  [31, 32, 33, 34, 35]
]
// let testCase2 = [9, 4, 9, 8, 4]
const res = solution(testCase)

console.log('testCase', testCase)
console.log('res', res)
