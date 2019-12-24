function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
exports.TreeNode = TreeNode

function getBinaryTreeFromArray(list) {
  if (list.length === 0) return null

  let root = new TreeNode(list[0])
  let queue = [ root ]

  let i = 1
  while (i < list.length) {
    let top = queue.shift()

    let left = list[i]
    top.left = left === null ? null : new TreeNode(left)
    i += 1

    let right = list[i]
    top.right = right === null ? null : new TreeNode(right)
    i += 1

    if (top.left !== null) queue.push(top.left)
    if (top.right !== null) queue.push(top.right)

  }
  return root
}
exports.getBinaryTreeFromArray = getBinaryTreeFromArray
