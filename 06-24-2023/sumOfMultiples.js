/* Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID" */

// set invalid case
// define num, and define sum
// run while loop to continue adding multiples
// return sum

function sumMul(n, m) {
  if (m <= n) return "INVALID";
  let num = n;
  let sum = 0;
  while (num < m) {
    sum += num;
    num += n;
  }
  return sum;
}
