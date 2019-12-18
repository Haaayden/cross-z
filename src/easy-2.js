// 买卖股票的最佳时机 II [122]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/22/

/**
 * 对峰谷法的简化
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  if (prices.length === 0) return 0
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]
    }
  }
  return profit
}

// 峰谷法
// function maxProfit(prices) {
//   let i = 0
//   let valley = prices[0]
//   let peak = prices[0]
//   let maxprofit = 0
//   while (i < prices.length - 1) {
//     while (i < prices.length - 1 && prices[i] >= prices[i + 1]) i++
//     valley = prices[i]
//     while (i < prices.length - 1 && prices[i] <= prices[i + 1]) i++
//     peak = prices[i]
//     maxprofit += peak - valley
//   }
//   return maxprofit
// }

module.exports = maxProfit
