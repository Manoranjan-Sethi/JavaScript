//find middle node in SLL

function findMiddleNode(node_head) {
  if (head == null) {
    return null;
  }
  let slow_ptr = head;
  let fast_ptr = head;

  while (fast_ptr != null && fast_ptr.next != null) {
    slow_ptr = slow_ptr.next;
    fast_ptr = fast_ptr.next;
  }
  return slow_ptr;
}
