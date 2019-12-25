// 二叉树的最大深度 [104]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/47/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 迭代
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//   if (root === null) return 0
//   let stack = [ new Map([[root, 1]]) ]
//   let depth = 0
//   while (stack.length !== 0) {
//     let curNodeMap = stack.pop()
//     let curNode
//     let curDepth
//     for (let [key, value] of curNodeMap) {
//       curNode = key
//       curDepth = value
//     }
//     if (curNode.val !== null) {
//       depth = Math.max(depth, curDepth)
//       if (curNode.left && curNode.left.val !== null) stack.push(new Map([[curNode.left, curDepth + 1]]))
//       if (curNode.right && curNode.right.val !== null) stack.push(new Map([[curNode.right, curDepth + 1]]))
//     }
//   }
//   return depth
// }

// 递归
var maxDepth = function(root) {
  if (root === null) {
    return 0
  } else {
    let left_depth = maxDepth(root.left)
    let right_depth = maxDepth(root.right)
    return Math.max(left_depth, right_depth) + 1
  }
}

module.exports = maxDepth
