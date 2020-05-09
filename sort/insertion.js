/**
 * 插入排序
 * 不断地将未排序的数字插入到已排序部分
 */
function insertionSort(list) {
  for (let i = 1; i <= list.length - 1; i++) {

    // 单次冒泡, 数组中只有一个元素是未排序时使用单次冒泡可排序
    // for (let j = i; j > 0; j--) {
    //   let cur = list[j]
    //   let prev = list[j-1]
    //   if (cur < prev) {
    //     let tmp = prev
    //     list[j-1] = cur
    //     list[j] = tmp
    //   }
    // }


    const cur = list[i]
    let j = i - 1
    // 指针 j 内循环，和 cur 值比较，若 j 所指向的值比 cur 值大，则该数右移一位
    for (j; j >= 0 && list[j] > cur; j--) {
      list[j + 1] = list[j]
    }
    // 内循环结束，j+1 所指向的位置就是 cur 值插入的位置
    list[j + 1] = cur

  }
  return list
}

module.exports = insertionSort
