// 验证二叉搜索树 [98]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/48/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 中序遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  // boolean 变量
  let isValidBSTFlag = true
  // 最大值变量
  let max = -Number.MAX_VALUE
  const orderSearch = root => {
    // 终止条件（判断当前结点是否为 null）
    if (root) {
      // 中序遍历
      orderSearch(root.left)
      // 判断遍历前后的值是否逐渐升序
      if (root.val > max) {
        // 存储当前结点值，进行下一次比较
        max = root.val
      } else {
        // 当前节点值小于前一结点值，返回 false
        isValidBSTFlag = false
      }
      orderSearch(root.right)
    }
  }
  orderSearch(root)
  return isValidBSTFlag
}

module.exports = isValidBST
