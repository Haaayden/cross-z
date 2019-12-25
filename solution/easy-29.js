// 对称二叉树
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/49/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归
// var isSymmetric = function(root) {
//   return isMirror(root, root)
// }

// function isMirror(t1, t2) {
//   if (t1 === null & t2 === null) return true
//   if (t1 === null || t2 === null) return false
//   return t1.val === t2.val
//     && isMirror(t1.left, t2.right)
//     && isMirror(t1.right, t2.left)
// }

// 迭代
var isSymmetric = function(root) {
  let queue = [root, root]
  while (queue.length !== 0) {
    let t1 = queue.shift()
    let t2 = queue.shift()
    if (t1 === null && t2 === null) continue
    if (t1 === null || t2 === null) return false
    if (t1.val !== t2.val) return false

    queue.push(t1.left)
    queue.push(t2.right)
    queue.push(t1.right)
    queue.push(t2.left)
  }
  return true
}

module.exports = isSymmetric
