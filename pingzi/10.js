// 删除字符串中出现次数>=2的相邻字符
// "abbbaca" => "aaca"=>"ca"

var solution = function(str) {
  let stack = []

  let i = 0
  while (i < str.length) {
    const top = stack[stack.length - 1]

    if (str[i] === top) {
      stack.pop()
      // 跳过原字符串中相邻相等的元素
      while (str[i] === top) {
        i++
      }
    } else {
      stack.push(str[i])
      i++
    }
  }

  return stack.join('')

}

module.exports = solution
