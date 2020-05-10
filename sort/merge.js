/**
 * 归并排序
 * 分治 递归
 * 一开始先把数组从中间划分成两个子数组，一直递归地把子数组划分成更小的子数组，直到子数组里面只有一个元素，才开始排序。
 * 排序的方法就是按照大小顺序合并两个元素，接着依次按照递归的返回顺序，不断地合并排好序的子数组，直到最后把整个数组的顺序排好。
 */
function mergeSort(list) {
  if (list.length <= 1) return list
  const mid = Math.ceil((list.length - 1) / 2)
  const left = list.slice(0, mid)
  const right = list.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let arr = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  return arr.concat(left).concat(right)
}

module.exports = mergeSort
