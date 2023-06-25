/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

/* use reduce and parseInt on curr

return sum of reduce */

function sumMix(x) {
  return x.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
}
