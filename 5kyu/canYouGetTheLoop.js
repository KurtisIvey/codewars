/* You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:


// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next */

function loop_size(node) {
  let size = 1;
  let seenNode = getNodeInLoop(node); // Get any node within the loop
  let pointer = seenNode.next; // Start iterating from the next node of the seen node

  while (pointer !== seenNode) {
    // Continue until we reach the seen node again
    size++; // Increment the size of the loop
    pointer = pointer.next; // Move to the next node in the loop
  }

  return size; // Return the size of the loop
}

function getNodeInLoop(node) {
  let slow = node; // Initialize slow pointer to the given node
  let fast = node.next; // Initialize fast pointer to the next node

  // Traverse the linked list until slow and fast pointers meet
  while (slow !== fast) {
    slow = slow.next; // Move slow pointer by 1 step
    fast = fast.next.next; // Move fast pointer by 2 steps
  }

  return slow; // Return the node where the slow and fast pointers meet (a node within the loop)
}

/*

The loop_size function calculates the length of the loop in the linked list. 
It first calls the getNodeInLoop function to obtain any node within the loop. Then, it initializes a 
pointer to the next node of the seenNode and iterates through the loop until the pointer reaches the 
seenNode again. During each iteration, it increments the size variable to keep track of the number of nodes
 visited. Finally, it returns the size of the loop.

The getNodeInLoop function is responsible for finding a node within the loop. 
It uses the Floyd's Tortoise and Hare algorithm, where it initializes a slow pointer to the given node and a
 fast pointer to the next node. It then moves the slow pointer by 1 step and the fast pointer by 2 steps until 
 they meet. The node where they meet is guaranteed to be within the loop. The function returns this node to be 
 used by the loop_size function.

Note: The code assumes that there is always a loop in the linked list and doesn't 
perform any checks for null or undefined values.

*/

function loop_size2(node) {
  var turtle = node;
  var rabbit = node;

  // Find a point in the loop.  Any point will do!
  // Since the rabbit moves faster than the turtle
  // and the kata guarantees a loop, the rabbit will
  // eventually catch up with the turtle.
  do {
    turtle = turtle.getNext();
    rabbit = rabbit.getNext().getNext();
  } while (turtle != rabbit);

  // The turtle and rabbit are now on the same node,
  // but we know that node is in a loop.  So now we
  // keep the turtle motionless and move the rabbit
  // until it finds the turtle again, counting the
  // nodes the rabbit visits in the mean time.
  var count = 0;
  do {
    ++count;
    rabbit = rabbit.getNext();
  } while (turtle != rabbit);

  // voila
  return count;
}
