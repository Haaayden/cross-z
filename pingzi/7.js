var lowestCommonAncestor = function(root, p, q) {
  // root 为 null 时返回 null
  if (root === null) return null
  // root 等于 p 或者 q 时返回 p q
  if (root.val === p.val) return p
  if (root.val === q.val) return q
  // 这里分别在左子树和右子树中找到其最近公共祖先节点(这里有个例外: 当左子树或者右子树本身等于 p 或者 q 时,直接返回 p 或者 q,而不是求其公共祖先节点)
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  // left 为 null，说明公共祖先节点在右子树
  if (left === null && right) return right
  // right 为 null，说明公共祖先节点在左子树
  if (right === null && left) return left
  // 左右子树都存在公共祖先节点，说明左右子树一边一个，公共祖先节点为 root
  if (left && right) return root
  // 都为 null，说明 p q 不在任何一个子树中，返回 null
  return null
};

module.exports = lowestCommonAncestor
