/**
 * 合并两个有序链表
 */

function mergeTwoLists(l1, l2) {
  let prevhead = new ListNode(-1)
  let prev = prevhead
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      prev.next = l1
      l1 = l1.next
    }
    else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 == null ? l2 : l1
  return prevhead.next
}