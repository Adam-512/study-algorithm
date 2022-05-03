/**
 * 环形链表
 * 遍历所有节点，每次遍历到一个节点时，判断该节点此前是否被访问过。
 */

function hasCycle(head){
  let mp = new Map()
  let prev = head
  let cycle = false
  while(prev!=null){
    if(mp.has(prev)){
      cycle = true
      break
    }
    mp.set(prev)
    prev = prev.next
  }
  return cycle
}

/** 快慢指针 */
function hasCycle1(head){
  if(head == null || head.next ==null){
    return
  }
  let slow = head
  let fast = head.next
  while(slow!=fast){
    if(slow == null||fast==null){
      return
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
}
