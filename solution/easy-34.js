// 爬楼梯
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/23/dynamic-programming/54/

/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   for (let i = 0; i < n.length; i++) {
//     let flag = false
//     for (let j = 0; j < n.length - i - 1; j++) {
//       if (n[j] > n[j+1]) {
//         // 交换位置
//         let tmp = n[j]
//         n[j] = n[j+1]
//         n[j+1] = tmp
//         flag = true
//       }
//     }
//     if (!flag) break
//   }
//   return n
// }

// var climbStairs = function(n) {
//   let length = n.length
//   for (let i = 1; i < length; i++) {
//     let value = n[i]
//     let j = i - 1
//     while (j >= 0) {
//       if (n[j] > value) {
//         n[j+1] = n[j]
//         j--
//       } else {
//         break
//       }
//     }
//     n[j+1] = value
//   }
//   return n
// }

// var climbStairs = function(n) {
//   for (let i = 0; i < n.length; i++) {
//     let minPoint = i
//     let minVal = n[i]
//     for (let j = i + 1; j < n.length; j++) {
//       if (n[j] < minVal) {
//         minPoint = j
//         minVal = n[j]
//       }
//     }
//     if (minPoint !== i) {
//       let tmp = n[i]
//       n[i] = minVal
//       n[minPoint] = tmp
//     }
//   }
//   return n
// }

// var climbStairs = function (arr) {
//   const length = arr.length
//   sort(arr, 0, length - 1)
// }

// function sort(arr, start, end) {
//   if (start >= end) return

//   const mid = Math.floor((start + end) / 2)
//   sort(arr, start, mid)
//   sort(arr, mid + 1, end)
//   merge(arr, start, mid, end)
// }

// function merge(arr, start, mid, end) {
//   let tmp = []
//   let i = start
//   let j = mid + 1
//   while (i <= mid && j <= end) {
//     if (arr[i] <= arr[j]) {
//       tmp.push(arr[i])
//       i++
//     } else {
//       tmp.push(arr[j])
//       j++
//     }
//   }

//   let leftStart = i
//   let leftEnd = mid
//   if (j <= end) {
//     leftStart = j
//     leftEnd = end
//   }
//   while (leftStart <= leftEnd) {
//     tmp.push(arr[leftStart])
//     leftStart++
//   }

//   while (start <= end) {
//     arr[start] = tmp.shift()
//     start++
//   }
// }

// var climbStairs = function (arr) {
//   const length = arr.length
//   sort(arr, 0, length - 1)
// }

// function sort(arr, start, end) {
//   if (start >= end) return

//   let subareaPoint = subarea(arr, start, end)
//   if (subareaPoint === end) return
//   sort(arr, start, subareaPoint - 1)
//   sort(arr, subareaPoint, end)
// }

// // 以与 arr[end] 的大小关系将 arr 分成两个区间
// function subarea(arr, start, end) {
//   let value = arr[end]

//   // 快慢指针，将大于arr[end]的元素置于 j 及以后
//   let i = start  // 遍历指针
//   let j = start  // 已处理区间末尾指针
//   while (i < end) {
//     if (arr[i] <= value) {
//       // arr[j] = arr[i]
//       if (arr[j] > value) {
//         let tmp = arr[j]
//         arr[j] = arr[i]
//         arr[i] = tmp
//       }
//       j++
//     }
//     i++
//   }

//   // 将 arr[end] 插入到位置 j
//   let k = end - 1
//   while (k >= j) {
//     arr[k+1] = arr[k]
//     k--
//   }
//   arr[j] = value

//   return j
// }

// 计数排序
var climbStairs = function(arr) {
  const length = arr.length
  // 查找最大值
  let max = arr[0]
  for (let i = 1; i < length; i++) {
    if (arr[i] > max) max = arr[i]
  }

  // 创建计数数组
  let countArr = []
  for (let i = 0; i <= max; i++) {
    countArr[i] = 0
  }

  // 计数
  for (let i = 0; i < length; i++) {
    countArr[arr[i]]++
  }

  // 计数换算成下标
  for (let i = 1; i <= max; i++) {
    countArr[i] = countArr[i-1] + countArr[i]
  }

  let tmp = []
  let i = length - 1
  while (i >= 0) {
    const value = arr[i]
    tmp[countArr[value] - 1] = value
    countArr[value]--
    i--
  }

  // 将结果数组拷贝给原数组
  for (let i = 0; i < length; i++) {
    arr[i] = tmp[i]
  }

}



module.exports = climbStairs
