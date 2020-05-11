/**
 *快速排序
 */
function quickSort(list) {
  if (list.length <= 1) return list

  let midIndex = Math.floor(list.length / 2)
  let mid = list.splice(midIndex, 1)[0]
  let left = []
  let right = []

  for (let i = 0; i <= list.length - 1; i++) {
    if (list[i] < mid) {
      left.push(list[i])
    } else {
      right.push(list[i])
    }
  }

  const leftSorted = quickSort(left)
  const rightSorted = quickSort(right)

  return leftSorted.concat([mid]).concat(rightSorted)
}

module.exports = quickSort
