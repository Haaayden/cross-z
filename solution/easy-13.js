// 整数反转 [7]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/33/

/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//   let xArray = x.toString().split('')

//   let i = 0
//   if (xArray[0] === '-') i = 1
//   for (j = xArray.length - 1; i < j; i++, j--) {
//     [xArray[i], xArray[j]] = [xArray[j], xArray[i]]
//   }

//   try {
//     resNum = Number(xArray.join(''))
//   } catch (error) {
//     return 0
//   }
//   if (resNum <= Math.pow(-2, 31) || resNum >= Math.pow(2, 31) - 1) return 0
//   return resNum
// }


var reverse = function(x) {
  const MAX_INT = Math.pow(2, 31) - 1
  const MIN_INT = Math.pow(-2, 31)
  let res = 0
  while (x !== 0) {
    let pop = x % 10
    x = parseInt(x / 10)
    if (res > parseInt(MAX_INT / 10) || res === parseInt(MAX_INT / 10) && pop > MAX_INT % 10) return 0
    if (res < parseInt(MIN_INT / 10) || res === parseInt(MIN_INT / 10) && pop < MIN_INT % 10) return 0
    res = res * 10 + pop
  }
  return res
}

module.exports = reverse
