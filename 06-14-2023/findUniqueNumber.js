/*

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

*/

/*
    create empty obj of count
    iterate through array and increment or add to object

    afterwards, we then iterate through the count object and if the value for key === 1
    we return that key in the obj

*/

function findUniqueElement(array) {
  let counts = {};

  // must use "of" and not "in" otherwise it wont iterate correctly. Of for arrays, in for objects
  for (let number of array) {
    // if counts number exists, we then add 1, if it doesn't it's set to 0 by default and then we add 1 to it
    counts[number] = (counts[number] || 0) + 1;
  }
  for (let number in counts) {
    if (counts[number] === 1) {
      // must parse float because it will be returned as a string since it's a key
      return parseFloat(number);
    }
  }
}
