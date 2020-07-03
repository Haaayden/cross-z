/**
 * 堆排序
 * @param {number[]} list
 */
function heapSort(list) {
  // 创建大顶堆
  buildHeap(list)

  let heapSize = list.length

  while (heapSize > 1) {
    // 交换顶部与最后一个元素
    swap(list, 0, heapSize - 1)
    // 每次堆的大小减一，数组最后一位保存堆顶也就是最大值
    // 每次将堆顶元素替换到数组最后一位后，重新堆化堆顶元素
    heapSize--
    heapify1(list, heapSize, 0)
  }


  return list
}

/**
 * 建堆
 * @param {*} list 数组
 */
function buildHeap(list) {
  for (let i = Math.floor(list.length/2); i >= 0; --i) {
    heapify1(list, list.length, i);
  }
  // for (let i = 1; i < list.length; i++) {
  //   heapify2(list, i)
  // }
  return list
}

/**
 * 从上往下的堆化方法-不断与左右子节点对比
 * 当发生交换时，发生交换的元素继续与其左右子节点对比
 * 循环重复上述过程直到未发生交换
 *
 * 该函数将 i 与其子节点对比，确保所有将其子节点中最大的数提升到 i（针对已经时大顶堆的堆来说）
 * 所以在初始化生成堆时，需要从后往前，也就是从最后一个具有子节点的元素开始执行此方法，一直到第一个元素
 * 全部执行完毕后生成一个大顶堆
 */
function heapify1(list, heapSize, i) {
  // 哨兵元素
  list.unshift(undefined)
  i++

  while (true) {
    let maxIndex = i
    if (2*i <= heapSize && list[i] < list[2*i]) maxIndex = 2*i
    if (2*i+1 <= heapSize && list[maxIndex] < list[2*i+1]) maxIndex = 2*i+1

    if (maxIndex === i) break
    swap(list, maxIndex, i)
    i = maxIndex

  }


  list.shift()
  return list
}

/**
 * 从下往上的堆化方法-不断与父节点对比
 * 单次堆化指定元素-大顶堆
 * 其实就是往大顶堆中插入一个元素 list[i]
 */
// function heapify2(list, i) {
//   // 哨兵元素
//   list.unshift(undefined)

//   let curIndex = i + 1
//   let parentIndex = Math.floor(curIndex / 2)

//   while (parentIndex > 0) {
//     let cur = list[curIndex]
//     let parent = list[parentIndex]
//     if (cur > parent) {
//       swap(list, curIndex, parentIndex)
//       curIndex = parentIndex
//       parentIndex = Math.floor(curIndex / 2)
//     } else {
//       break
//     }

//   }

//   list.shift()
//   return list
// }

function swap(list, i, j) {
  const tmp = list[i]
  list[i] = list[j]
  list[j] = tmp
}


module.exports = heapSort
