// 验证回文字符串 [125]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/36/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false
  }
  return true
}

module.exports = isPalindrome
