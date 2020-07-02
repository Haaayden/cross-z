function quickSort(list) {

  const highIndex = list.length - 1
  const lowIndex = 0

  sort(list, lowIndex, highIndex)

}

function sort(list, lowIndex, highIndex) {

  // 数组长度为1时直接返回
  if (lowIndex >= highIndex) return list

  const pIndex = partition(list, lowIndex, highIndex)

  sort(list, 0, pIndex - 1)
  sort(list, pIndex + 1, highIndex)
}

// 找到一个随机基准点，并且分割数组
function partition(list, lowIndex, highIndex) {
  // 使用 randRang 找一个随机基准点，并将基准点交换到数组最后一位
  swap(list, randRang(lowIndex, highIndex), highIndex)

  let i = 0
  let j = 0
  // 遍历数组，将小于基准点的元素放入 [0, i)
  // 遍历结束后 [0, i - 1] 存放小于基准点的元素
  // [i, j - 1] 存放大于基准点的元素
  for (;j < highIndex; j++) {
    if (list[j] <= list[highIndex]) {
      swap(list, i, j)
      i++
    }
  }

  // 此时j = highIndex, 交换 i j元素，即将基准点交换到 i 位置
  // 最后 [0, i - 1] 小于基准点元素
  // i 基准点
  // [ i + 1, j] 大于基准点元素
  swap(list, i, j)

  // 返回基准点位置
  return i
}

function swap(list, i, j) {
  const tmp = list[i]
  list[i] = list[j]
  list[j] = tmp
}
function randRang(lowIndex, highIndex) {
  return Math.floor(Math.random() * (highIndex - lowIndex)) + lowIndex
}

module.exports = quickSort