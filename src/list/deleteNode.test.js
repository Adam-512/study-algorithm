/**
 * 只能直接访问 要被删除的节点 
 * 题目数据保证需要删除的节点 不是末尾节点 。
 */

function deleteNode(node){
  node.next = node.next.next
  node.value = node.next.value
}