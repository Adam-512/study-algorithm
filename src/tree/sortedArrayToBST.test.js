/**
 * 有序数组转高度平衡的二叉搜索树
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function helper(nums, lower, upper) {
  if (lower > upper) {
    return;
  }
  let mid = (upper + lower) / 2;
  let root = new Node(nums[mid]);
  root.left = helper(nums, lower, mid - 1);
  root.right = helper(nums, mid + 1, upper);
}

function sortedArrayToBST(nums) {
  return helper(nums, 0, nums.length - 1);
}
