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

    const left = top.left
    if (left !== null) stack.push(left)

    const right = top.right
    if (right !== null) stack.push(right)

  }

  return res
};

// 中序遍历
// var preorderTraversal = function(root) {
//   if (root === null) return []

//   let stack = []
//   let res = []

//   let curNode = root
//   while (curNode !== null || stack.length >= 1) {

//     while (curNode !== null) {
//       stack.push(curNode)
//       curNode = curNode.left
//     }
//     curNode = stack.pop()
//     res.push(curNode.val)
//     curNode = curNode.right

//   }

//   return res
// }

module.exports = preorderTraversal
