/* Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same. */

function distinct(a) {
  // new empty set
  const uniqueSet = new Set();
  // later output
  const outputArray = [];

  for (const num of arr) {
    if (!uniqueSet.has(num)) {
      // add to set because set can only contain one of num
      uniqueSet.add(num);
      // push to output arr
      outputArray.push(num);
    }
  }

  return outputArray;
}

// big brain solution
function distinct(a) {
  return [...new Set(a)];
}
// spread operator with new Set
function distinct(a) {
  // Step 1: Create a new Set from the input array 'a'
  // A Set automatically removes duplicate elements, keeping only unique values.
  const uniqueSet = new Set(a);

  // Step 2: Convert the Set back to an array using the spread operator '...'
  // The spread operator spreads the elements of the Set into a new array.
  // This creates an array containing unique elements from the input array 'a'.
  const uniqueArray = [...uniqueSet];

  // Step 3: Return the resulting array that contains the unique elements in the same order.
  return uniqueArray;
}
