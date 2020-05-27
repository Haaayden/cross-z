// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 二叉树中序遍历

var inorderTraversal = function(root) {
  if (root === null) return []

  // let res = []
  // helper(root)
  // function helper(node) {
  //   if (node.left !== null) {
  //     helper(node.left)
  //   }
  //   res.push(node.val)
  //   if (node.right !== null) {
  //     helper(node.right)
  //   }
  // }

  let stack = [ [ false, root ] ]
  let res = []
  while (stack.length > 0) {
    const [ isVisited, node ] = stack.pop()
    if (node === null) continue
    if (isVisited === false) {
      stack.push([ false, node.right ])
      stack.push([ true, node ])
      stack.push([ false, node.left ])
    } else {
      res.push(node.val)
    }
  }

  return res
}

module.exports = inorderTraversal
