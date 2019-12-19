// 加一 [66]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/27/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let plus = 0  // 进位
  for (let i = digits.length - 1; i >= 0; i--) {
    let remainder = digits[i]
    if (i === digits.length - 1) {
      remainder = (digits[i] + 1) % 10       // 余数
      plus = parseInt((digits[i] + 1) / 10)
    } else {
      remainder = (digits[i] + plus) % 10
      plus = parseInt((digits[i] + plus) / 10)

    }
    digits[i] = remainder
  }
  if (plus > 0) {
    digits.unshift(plus)
  }
  return digits
}

module.exports = plusOne
