/**
 * 树，遍历
 */

function preOrder(root) {
  let stack = [];
  let res = [];
  while (root != null) {
    res.push(root.val);
    stack.push(root.left);
    root = root.left;
  }
  while (stack.length) {
    let node = stack.pop();
    let r = node.right;
    while (r != null) {
      res.push(r.val);
      stack.push(r);
      r = right.left;
    }
  }
  return res;
}

function inOrder(root) {
  let stack = [];
  let res = [];
  while (root != null) {
    stack.push(root.left);
    root = root.left;
  }
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    let r = node.right;
    while (r != null) {
      stack.push(r);
      r = right.left;
    }
  }
  return res;
}

function bfs(root) {
  if (root == null) {
    return;
  }
  let stack = [];
  let res = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    let l = node.left;
    let r = node.right;
    if (l != null) {
      stack.push(l);
    }
    if (r != null) {
      stack.push(r);
    }
  }
}
