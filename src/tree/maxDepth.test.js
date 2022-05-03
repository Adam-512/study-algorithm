/**
 * 给定一个二叉树，找出其最大深度。
 */

function maxDepth(root) {
  if (root == null) return 0
  else {
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1
  }
}