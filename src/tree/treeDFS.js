/**
 *
 */

 class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null
  }
  getRoot() {
    return this.root;
  }
  insert(data) {
    let newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (node.data < newNode.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  preorderTraversal(root) {
    if (root !== null) {
      console.log(root.data);
      this.preorderTraversal(root.left);
      this.preorderTraversal(root.right);
    }
  }
  inorderTraversal(root) {
    if (root !== null) {
      this.inorderTraversal(root.left);
      console.log(root.data);
      this.inorderTraversal(root.right);
    }
  }
  postOrderTraversal(root) {
    if (root !== null) {
      this.postOrderTraversal(root.left);
      this.postOrderTraversal(root.right);
      console.log(root.data);
    }
  }
}

 (() => {
  // create an object for the BinarySearchTree
  let BST = new BinarySearchTree();

  // Inserting nodes to the BinarySearchTree
  BST.insert(15);
  BST.insert(25);
  BST.insert(10);
  BST.insert(7);
  BST.insert(22);
  BST.insert(17);
  BST.insert(13);
  BST.insert(5);
  BST.insert(9);
  BST.insert(27);

  let root = BST.getRoot();

  BST.postOrderTraversal(root);
})()
