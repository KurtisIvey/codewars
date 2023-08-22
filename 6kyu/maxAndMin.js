/*
p: two arrays of ints
r: return array of max dif and min dif
ep:
    sort both arrays from least to greatest
    create empty arr
    calc max dif via math.max and last index compare to first index of opp arr
    calc minDif via for loop using math.min with each iteration
    return array



*/
function maxAndMin(arr1, arr2) {
  // Sort both input arrays in ascending order
  // use slice to ensure orig array remains unchanged
  const sortedArr1 = arr1.slice().sort((a, b) => a - b);
  const sortedArr2 = arr2.slice().sort((a, b) => a - b);

  // Calculate the maximum difference
  const maxDifference = Math.max(
    // Calculate the absolute difference between the smallest element of arr1 and the largest element of arr2
    Math.abs(sortedArr1[0] - sortedArr2[sortedArr2.length - 1]),
    // Calculate the absolute difference between the smallest element of arr2 and the largest element of arr1
    Math.abs(sortedArr2[0] - sortedArr1[sortedArr1.length - 1])
  );

  // Initialize the minimum difference with the absolute difference between the first elements of both arrays
  let minDifference = Math.abs(sortedArr1[0] - sortedArr2[0]);
  //let minDifference = Math.abs(sortedArr1[0] - sortedArr2[0]);

  // Compare elements from both arrays to find the minimum difference
  for (let i = 0, j = 0; i < sortedArr1.length && j < sortedArr2.length; ) {
    const diff = Math.abs(sortedArr1[i] - sortedArr2[j]);
    // Update the minimum difference if the current difference is smaller
    minDifference = Math.min(minDifference, diff);

    // Move the index of the array with the smaller element to compare the next elements
    if (sortedArr1[i] < sortedArr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  // Return the calculated maximum and minimum differences as an array
  return [maxDifference, minDifference];
}

// Example usage
const result = maxAndMin([3, 10, 5], [20, 7, 15, 8]);
console.log(result); // Output: [17, 2]
