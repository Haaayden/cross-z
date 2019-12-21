// 最长公共前缀 [14]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/40/

/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   let res = ''
//   for (let i = 0; i < (strs[0] && strs[0].length); i++) {

//     let isCommon = true
//     for (let j = 0; j < strs.length; j++) {
//       if (strs[0][i] !== strs[j][i]) {
//         isCommon = false
//         break
//       }
//     }
//     if (isCommon) {
//       res += strs[0][i]
//     } else {
//       return res
//     }

//   }
//   return res
// }

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while(strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix.length === 0) return ''
    }
  }
  return prefix
}

module.exports = longestCommonPrefix
