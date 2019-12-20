// 字符串中的第一个唯一字符 [387]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/34/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const sArray = s.split('')
  let map = new Map()

  for (i = 0; i < sArray.length; i++) {
    const char = sArray[i]
    const indexArr = map.get(char) || []
    indexArr.push(i)
    map.set(char, indexArr)
  }

  for (const [key, value] of map) {
    if (value.length === 1) {
      return value[0]
    }
  }
  return -1
}

module.exports = firstUniqChar
