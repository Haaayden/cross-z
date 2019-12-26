// 将有序数组转化为二叉搜索树 [108]
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/51/

const { TreeNode } = require('../util/TreeNode')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 二分法+递归   二叉搜索树中序遍历即为升序数组
var sortedArrayToBST = function(nums) {
  function helper(nums, left, right) {
    if (left === right) return null

    let mid = (left + right) >>> 1
    let root = new TreeNode(nums[mid])
    root.left = helper(nums, left, mid)
    root.right = helper(nums, mid + 1, right)
    return root
  }

  return helper(nums, 0, nums.length)

}

module.exports = sortedArrayToBST
