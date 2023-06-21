/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!

pseudoCode:
    use reduce to come up with value and % operator to determine if odd or even


*/

function oddOrEven(array) {
  if (array.length === 0) return "even";
  if (array.length === 1 && array[0] === 0) return "even";
  const sum = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, 1, 5]));
