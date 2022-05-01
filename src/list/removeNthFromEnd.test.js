/**
 * 删除链表的倒数第N个节点
 */

function removeNthFromEnd(head, n) {
  let temp = new Nodeitem(0, head)
  let first = head
  for (let i = 0; i < n; i++){
    first = first.next
  }
  while(first){
    temp = first.next
    first = first.next
  }
  temp.next = temp.next.next
}