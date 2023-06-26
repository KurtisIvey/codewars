/*

Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

Here's an example of push() usage:

var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.

The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null



*/

function Node(data) {
  this.data = data;
  this.next = null;
}

// Push function to add a new node to the linked list
function push(head, data) {
  const newNode = new Node(data);
  if (head === null) {
    // If the head is null, the list is empty
    // Set the newNode as the head of the list
    head = newNode;
  } else {
    // If the list is not empty, set the next property of the newNode
    // to the current head, effectively prepending it to the list
    newNode.next = head;
    // Set the newNode as the new head of the list
    head = newNode;
  }
  // Return the modified head of the list
  return head;
}

// BuildOneTwoThree function to create and return a linked list with nodes 1 -> 2 -> 3
function buildOneTwoThree() {
  let head = null;

  // Call the push function three times in reverse order
  // to prepend nodes with values 3, 2, and 1 to the list
  head = push(head, 3);
  head = push(head, 2);
  head = push(head, 1);

  // Return the modified head of the list, representing the linked list 1 -> 2 -> 3
  return head;
}
