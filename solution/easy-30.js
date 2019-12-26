// 二叉树的层次遍历 [102]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/50/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 迭代
var levelOrder = function(root) {
  if (root === null) return []
  let queue = [root]
  let level = 0
  let res = []
  while (queue.length !== 0) {
    res[level] = []

    let queueLength = queue.length
    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift()
      res[level].push(node.val)

      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }

    level++
  }
  return res
}

module.exports = levelOrder
