/*

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2



psuedocode:
    recursive, so what we'll do is create function that converts n to a string
    string[0]
    take the first index of that string via  via slice(1)
    parseInt(slicedArr)

    parse the int(string[0]) to convert back to integer  + recursive function of (    parseInt(slicedArr))
*/

function digitalRoot(n) {
  let stringN = n.toString();
  if (stringN.length === 1) return n;

  // converted to string and take first index out and reconvert to int
  let firstDigit = parseInt(stringN[0]);
  // slice the string to get everything but the first num pulled, we then convert back to int and call digital root again
  let sliced = parseInt(stringN.slice(1));

  // recursively call until whole num is iterated through digits
  let sum = firstDigit + digitalRoot(sliced);

  // forces digital root to be called again until the number is < 10
  return digitalRoot(sum);
}
