// 有效的字母异位词 [242]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/35/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//   const sArr = s.split('').sort()
//   const tArr = t.split('').sort()
//   return sArr.join('') === tArr.join('')
// }


var isAnagram = function(s, t) {
  const sArr = s.split('')
  const tArr = t.split('')

  if (sArr.length !== tArr.length) return false

  let map = new Map()
  for (let i = 0; i < sArr.length; i++) {
    map.set(sArr[i], (map.get(sArr[i]) || 0) + 1)
    map.set(tArr[i], (map.get(tArr[i]) || 0) - 1)
  }
  for (const [key, value] of map) {
    if (value !== 0) {
      return false
    }
  }
  return true
}

module.exports = isAnagram
