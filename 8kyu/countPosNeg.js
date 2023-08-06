// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the
// second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

/*
p: input of array of integers
r: return arr where first index is pos sum, second neg sum
ep:
    must have condition for null input to return empty arr
    use for loop to iterate through nums
    if > 0 increment pos count
    if < 0 decrement neg sum
    must return [] if pos & neg both === 0
    return [pos, neg]
*/

function countPositivesSumNegatives(input) {
  if (input === null) {
    return [];
  }
  let pos = 0;
  let neg = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      pos += 1;
    } else {
      neg += input[i];
    }
  }
  if (pos === 0 && neg === 0) return [];
  return [pos, neg];
}
