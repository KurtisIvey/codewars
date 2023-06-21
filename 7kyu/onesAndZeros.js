/*

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

index:
    0:8
    1:4
    2:2
    3:1

pseudocode:
    use parseInt to convert binary string to decimal val 
*/
// Define a function called binaryArrayToNumber that takes an array as input
function binaryArrayToNumber(arr) {
  // Join the elements of the array into a string without any separator
  // For example, [1, 0, 1, 1] becomes "1011"
  const binaryString = arr.join("");

  // Parse the binary string as a decimal number
  // The second argument 2 specifies that the string is in base 2 (binary)
  // This converts the binary string "1011" to the decimal number 11
  const decimalNumber = parseInt(binaryString, 2);

  // Return the decimal number
  return decimalNumber;
}
