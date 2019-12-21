// 报数 [38]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/39/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  n -= 1
  let res = '1'
  for (let i = 0; i < n; i++) {
    let repeatCount = 1
    let str = ''
    for (let j = 0; j < res.length; j++) {
      if (res[j] === res[j+1]) {
        repeatCount++
      } else {
        str += repeatCount + res[j]
        repeatCount = 1
      }
    }
    res = str
  }
  return res
}

module.exports = countAndSay
