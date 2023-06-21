/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

// need handler for array.length = 0
// use reduce and for the final val return reduce sum divided by array.length

function findAverage(array) {
  if (array.length === 0) return 0;
  let sum = array.reduce(function (previousVal, currentVal) {
    return previousVal + currentVal;
  });
  return sum / array.length;
}
