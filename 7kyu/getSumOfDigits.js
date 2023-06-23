/* Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14

function getSumOfDigits(integer) {
    var sum = null;
    var digits =  Math.floor(integer).toString();
    for(var ix = 1; ix < digits.length; ix = sum + 1) {
      sum =+ digits[ix + 1]);
    }
    return sum;
  } 

pseudocode:
  prev code is doing way too much. 
  convert int into string , split('') and then reduce. returning that value
  
*/

function getSumOfDigits(integer) {
  let arr = integer.toString().split("");

  return arr.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
}
