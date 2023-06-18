/*

The provided solution defines a function xor that takes in two parameters a and b. The implementation uses the inequality operator !== to evaluate the logical XOR operation between a and b. Here's an explanation of how the solution works:

The !== operator is a strict inequality operator that checks if the operands are not equal and of different types. If a and b are not equal, the expression a !== b evaluates to true. If they are equal, the expression evaluates to false.

The xor function returns the result of the a !== b comparison. In other words, it returns true if a and b are not equal, and false if they are equal.

The implementation relies on the fact that the inequality operator !== produces true when the two operands are not equal, and false when they are equal. This behavior aligns with the logical XOR operation, which returns true if exactly one of the operands is true, and false if both operands are either true or false.

For example, let's consider some scenarios:

xor(true, false) returns true because true is not equal to false.
xor(false, true) returns true because false is not equal to true.
xor(true, true) returns false because true is equal to true.
xor(false, false) returns false because false is equal to false.
So, the solution essentially returns true if the inputs a and b are different, and false if they are the same, which aligns with the behavior of the logical XOR operation.


the whole point is them being opposites, so this is why this works
*/

function xor(a, b) {
  return a != b;
}
