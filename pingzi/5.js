// 二叉树先序遍历

function preorderTraversal(root) {
  let stack = []
  let res = []
  let tmp = root
  while (tmp !== null || stack.length > 0) {
    if (tmp !== null) {
      res.push(tmp.val)
      stack.push(tmp.left)
      tmp = tmp.left
    } else {
      const node = stack.pop()
      tmp = node.right
    }
  }
}
