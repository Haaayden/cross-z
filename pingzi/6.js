// 平衡二叉树
function isBalanced(root) {
  if (root === null) return true
  return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

/**
 * 获取指定节点的高度
 */
function getHeight(node) {
  if (node === null) return -1
  let queue = [node]
  let level = -1
  while (queue.length > 0) {
    level++
    let count = queue.length
    while(count > 0) {
      const node = queue.shift()
      if (node && node.left) queue.push(node.left)
      if (node && node.right) queue.push(node.right)
      count--
    }
  }

  return level
}

module.exports = isBalanced
