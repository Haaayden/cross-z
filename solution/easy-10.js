// 有效数独 [36]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/30/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function(board) {
//   // 检查行
//   for (i = 0; i <= 8; i++) {
//     const arrayNeedCheck = board[i]

//     if (isRepeat(arrayNeedCheck)) return false
//   }

//   // 检查列
//   for (i = 0; i <= 8; i++) {
//     let arrayNeedCheck = []
//     for (j = 0; j <= 8; j++) {
//       arrayNeedCheck.push(board[j][i])
//     }

//     if (isRepeat(arrayNeedCheck)) return false
//   }

//   // 检查 3x3 宫
//   let arrayNeedCheck = []
//   for (i = 0; i <= 2; i++) {
//     for (j = 0; j <= 2; j++) {
//       arrayNeedCheck.push(board[j][i])
//     }
//   }
//   if (isRepeat(arrayNeedCheck)) return false

//   arrayNeedCheck = []
//   for (i = 0; i <= 2; i++) {
//     for (j = 3; j <= 5; j++) {
//       arrayNeedCheck.push(board[j][i])
//     }
//   }
//   if (isRepeat(arrayNeedCheck)) return false

//   arrayNeedCheck = []
//   for (i = 0; i <= 2; i++) {
//     for (j = 6; j <= 8; j++) {
//       arrayNeedCheck.push(board[j][i])
//     }
//   }
//   if (isRepeat(arrayNeedCheck)) return false

//   arrayNeedCheck = []
//   for (i = 3; i <= 5; i++) {
//     for (j = 0; j <= 2; j++) {
//       arrayNeedCheck.push(board[j][i])
//     }
//   }
//   if (isRepeat(arrayNeedCheck)) return false


//   arrayNeedCheck = []
//   for (i = 3; i <= 5; i++) {
//     for (j = 3; j <= 5; j++) {
//       arrayNeedCheck.push(board[j][i])
//     }
//   }
//   if (isRepeat(arrayNeedCheck)) return false

//   arrayNeedCheck = []
//   for (i = 3; i <= 5; i++) {
//     for (j = 6; j <= 8; j++) {
//       arrayNeedCheck.push(board[j][i])
//     }
//   }
//   if (isRepeat(arrayNeedCheck)) return false

//   arrayNeedCheck = []
//   for (i = 6; i <= 8; i++) {
//     for (j = 0; j <= 2; j++) {
//       arrayNeedCheck.push(board[j][i])
//     }
//   }
//   if (isRepeat(arrayNeedCheck)) return false

//   arrayNeedCheck = []
//   for (i = 6; i <= 8; i++) {
//     for (j = 3; j <= 5; j++) {
//       arrayNeedCheck.push(board[j][i])
//     }
//   }
//   if (isRepeat(arrayNeedCheck)) return false

//   arrayNeedCheck = []
//   for (i = 6; i <= 8; i++) {
//     for (j = 6; j <= 8; j++) {
//       arrayNeedCheck.push(board[j][i])
//     }
//   }
//   if (isRepeat(arrayNeedCheck)) return false

//   return true
// }

// function isRepeat(array) {
//   let map = new Map()
//   for (const item of array) {
//     let count = map.get(item) || 0
//     if (count > 0 && item !== '.') {
//       return true
//     }
//     map.set(item, count + 1)
//   }
//   return false
// }

var isValidSudoku = function(board) {
  let rows = []
  let colums = []
  let boxes = []
  for (let i = 0; i < 9; i++) {
    rows[i] = new Map()
    colums[i] = new Map()
    boxes[i] = new Map()
  }

  // 遍历所有 81 个元素
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      if (num !== '.') {
        const boxesIndex = parseInt(i / 3) * 3 + parseInt(j / 3)
        if (rows[i].get(num) || colums[j].get(num) || boxes[boxesIndex].get(num)) return false
        rows[i].set(num, 1)
        colums[j].set(num, 1)
        boxes[boxesIndex].set(num, 1)
      }
    }
  }
  return true
}

module.exports = isValidSudoku
