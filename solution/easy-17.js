// 字符串转换整数 atoi [8]

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const INT_MAX = Math.pow(2, 31) - 1
  const INT_MIN = Math.pow(-2, 31)
  str = str.trim()
  if (!/[0-9\-\+]/.test(str[0])) return 0

  let newStr = str[0]
  for (let i = 1; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      newStr += str[i]
    } else {
      break
    }
  }

  const number = Number(newStr)
  if (isNaN(number)) return 0
  if (number >= INT_MAX) return INT_MAX
  if (number <= INT_MIN) return INT_MIN
  return number
}

module.exports = myAtoi
