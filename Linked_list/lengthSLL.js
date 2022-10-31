//find length of the node

function length(node_head) {
  let count = 0;
  let current = head;
  while (current != null) {
    count++;
    current = current.next;
  }
  return count;
}
