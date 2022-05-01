/**
 * 回文链表
 */

function reverse(node){
  let cur = node
  let prev = null
  while(cur!=null){
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

function getHalf(node) {
  let fast = node
  let slow = node
  if (fast.next != null && fast.next.next != null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}


function isPalindrome(head) {
  const firstHalf = getHalf(head)
  const seccondHalf = reverse(firstHalf.next)

  let result = true
  let p1 = firstHalf
  let p2 = seccondHalf
  while (result && p1 != null) {
    if (p1.val != p2.val) result = false
    p1 = p1.next
    p2.next = p2.next
  }

  firstHalf.next = reverse(seccondHalf)
  return result
}