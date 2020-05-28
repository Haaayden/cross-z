// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// 二叉树层序遍历

var levelOrder = function(root) {
  let queue = [ root ]
  let res = []

  let level = 0
  while (queue.length > 0) {
    level += 1
    let levelCount = queue.length
    let levelRes = []
    while (levelCount > 0 && queue.length > 0) {
      levelCount -= 1
      const node = queue.shift()

      if (node === null) continue
      queue.push(node.left)
      queue.push(node.right)

      levelRes.push(node.val)
    }

    if (levelRes.length > 0) res.push(levelRes)

  }

  return res
}

module.exports = levelOrder
