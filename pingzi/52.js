// https://github.com/sisterAn/JavaScript-Algorithms/issues/50
// https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
/**
 * 剑指Offer：第一个只出现一次的字符
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 */

var firstUniqChar = function(s) {
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], false)
    } else {
      map.set(s[i], true)
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === true) {
      return s[i]
    }
  }
  return ' '
}

export default = firstUniqChar
