/**
 * 反转链表
 */
function reverseList(head){
  let prev = null
  let cur = head
  while(cur){
    const next = cur.next
    cur.next = prev
    
    //这里顺序不能反
    prev = cur
    cur = next
  }
}