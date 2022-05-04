/**
 * 二叉树
 */

class Tree {
  maxDeepth = 0;
  root;
  constructor(root) {
    this.root = root;
  }
  //获取最大深度
  getMaxDeepth() {
    this.traversal(this.root, 1);
    return this.maxDeepth;
  }
  traversal(node, curDeepth) {
    if (!node) {
      return;
    }
    this.maxDeepth = Math.max(this.maxDeepth, curDeepth);

    this.traversal(node.left, curDeepth + 1);
    this.traversal(node.right, curDeepth + 1);
  }


  //判断二叉搜索树
  bstHelper(node, lower, upper) {
    if (!node) {
      return true;
    }
    if (node.val >= upper || node.val <= lower) {
      return false;
    }
    return (
      this.bstHelper(node.left, lower, node.val) &&
      this.bstHelper(node.right, node.val, upper)
    );
  }
  isValidBST() {
    this.bstHelper(this.root, -Infinity, Infinity);
  }

  //判断对称二叉树
  symmericHelper(node1,node2){
    if(!node1&& !node2){
      return true
    }
    if(!node1 || !node2){
      return false
    }
    return node1.val == node2.val && symmericHelper(node1.left,node2.right) && symmericHelper(node1.right,node2.left)
  }
  isSymmetric(){
    return this.symmericHelper(this.root,this.root)
  }
}
