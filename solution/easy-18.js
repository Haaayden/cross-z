// 实现 strStr() [28]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/38/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // if (haystack === needle || needle === '') return 0

  // let res = -1
  // let j = 0
  // let prev = -1
  // for (let i = 0; i < haystack.length; i++) {
  //   if (haystack[i] === needle[j]) {
  //     if (prev !== -1 && i - prev !== 1) {
  //       j = 0
  //       prev = -1
  //     }
  //     prev = i
  //     if (j === 0) res = i
  //     if (j === needle.length - 1) return res
  //     j++
  //   } else {
  //     j = 0
  //     if (prev !== -1) i--
  //     prev = -1
  //     res = -1
  //   }
  // }
  // return -1

  if (haystack === needle || needle === '') return 0
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] = needle[0]) {
      if (haystack.substr(i, needle.length) === needle) return i
    }
  }
  return -1
}

module.exports = strStr
