// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
 */

// var isValid = function(s) {
//   const left = ['(', '{', '[']
//   const right = [')', '}', ']']
//   const map = new Map()
//   right.forEach((item, i) => {
//     map.set(item, left[i])
//   })

//   const sArr = s.split('')
//   let arr = []
//   for (let i = 0; i < sArr.length; i++) {
//     if (left.indexOf(sArr[i]) >= 0) {
//       arr.push(sArr[i])
//       continue
//     }
//     if (right.indexOf(sArr[i]) >= 0) {
//       let left = arr.pop()
//       if (left !== map.get(sArr[i])) return false
//     }
//   }
//   return arr.length <= 0
// };

var isValid = function(s) {
  const map = new Map([['(', ')'], ['{', '}'], ['[', ']']])

  const sArr = s.split('')
  let stack = []
  for (let i = 0; i < sArr.length; i++) {
    if (map.has(sArr[i])) {
      stack.push(sArr[i])
      continue
    }
    let left = stack.pop()
    if (map.get(left) !== sArr[i]) return false
  }
  return stack.length <= 0
};

module.exports = isValid
