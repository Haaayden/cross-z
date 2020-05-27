// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
// 二叉树前序遍历

// [1,null,2,3] -> [1, 2, 3]

var preorderTraversal = function(root) {
  if (root === null) return []

  let stack = [ root ]
  let res = []

  while (stack.length >= 1) {
    const top = stack.pop()
    res.push(top.val)

    const right = top.right
    if (right !== null) stack.push(right)
    const left = top.left
    if (left !== null) stack.push(left)
  }

  return res
}

module.exports = preorderTraversal
