// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
// 二叉树后序遍历

var postorderTraversal = function(root) {
  if (root === null) return []

  let stack = [ [ false, root ] ]
  let res = []
  while (stack.length > 0) {
    const [ isVisited, node ] = stack.pop()
    if (node === null) continue
    if (isVisited === false) {
      stack.push([ true, node ])
      stack.push([ false, node.right ])
      stack.push([ false, node.left ])
    } else {
      res.push(node.val)
    }

  }

  return res
};

module.exports = postorderTraversal
