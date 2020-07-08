// 数组去重

module.exports = (arr) => {
  // for(let i = 0; i < arr.length - 1; i++) {
  //   for(let j = arr.length - 1; j > i; j--) {
  //     if (arr[i] === arr[j]) arr.splice(j, 1)
  //   }
  // }
  // return arr

  arr.sort()
  for (let i = arr.length - 1; i >= 1; i--) {
    if (arr[i] === arr[i-1]) arr.splice(i, 1)
  }
  return arr
}
