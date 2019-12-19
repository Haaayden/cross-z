// 反转字符串 [344]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/32/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//   const length = s.length
//   let tmp
//   for (let i = 0; i < parseInt(length / 2); i++) {
//     tmp = s[i]
//     s[i] = s[length - i - 1]
//     s[length - i - 1] = tmp
//   }
// }

// 双指针
var reverseString = function(s) {
  const length = s.length
  for (let i = 0, j = length - 1; i < j; i++, j--) {
    let tmp = s[i]
    s[i] = s[j]
    s[j] = tmp
  }
}

module.exports = reverseString
