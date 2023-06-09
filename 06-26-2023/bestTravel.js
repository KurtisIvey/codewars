/*

John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

Example:
With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.

Examples:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228


pseudocode:
have a var called distance to track distance
have var called arr to track biggest arr
use for loops to iterate over ls
for loop loops through arrays and not items within array
    if(array[i].length <= k){  
        with that array, calculate sum using reduce;
        if sum > distance
        distance = sum;
        arr = array[i];
    }
    

return distance
*/
function chooseBestSum(t, k, ls) {
  let result = null; // Variable to store the largest sum found

  // Recursive function to generate combinations of distances
  function generateCombinations(index, count, sum) {
    // Base case: If count reaches k (number of towns selected)
    if (count === k) {
      // Check if the sum is within the limit t and update the result if it's larger
      if (sum <= t && (result === null || sum > result)) {
        result = sum;
      }
      return;
    }

    // Base case: If all distances have been considered (index reaches the length of ls array)
    if (index === ls.length) {
      return;
    }

    // Recursive calls to generate combinations
    // Include the distance at the current index
    generateCombinations(index + 1, count + 1, sum + ls[index]);
    // Exclude the distance at the current index
    generateCombinations(index + 1, count, sum);
  }

  // Initial call to generateCombinations with initial parameters
  generateCombinations(0, 0, 0);

  return result; // Return the largest sum found
}
