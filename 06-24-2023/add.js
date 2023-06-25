/*

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives


can't use big int :(

pesudo code: 
*/
function add(a, b) {
  let result = ""; // Initialize an empty string to store the result
  let carry = 0; // Initialize the carry value to 0
  let i = a.length - 1; // Initialize the index for the rightmost digit of 'a'
  let j = b.length - 1; // Initialize the index for the rightmost digit of 'b'

  while (i >= 0 || j >= 0 || carry !== 0) {
    // Iterate while there are digits remaining in either 'a', 'b', or there's a carry

    const digitA = i >= 0 ? parseInt(a[i]) : 0; // Get the current digit of 'a' or use 0 if all digits have been processed
    const digitB = j >= 0 ? parseInt(b[j]) : 0; // Get the current digit of 'b' or use 0 if all digits have been processed

    const sum = digitA + digitB + carry; // Calculate the sum of the digits and the carry
    const digitSum = sum % 10; // Get the rightmost digit of the sum
    //math.floor to round down to nearest integer so the carry isn't a decimal
    carry = Math.floor(sum / 10); // Calculate the carry for the next iteration

    result = digitSum + result; // Prepend the rightmost digit to the result string

    i--; // Move to the next digit of 'a'
    j--; // Move to the next digit of 'b'
  }

  return result; // Return the final result as a string
}

//exmaple:

/*

Initialize the necessary variables:

a = "99"
b = "99"
result = ""
carry = 0
i = 1
j = 1
Enter the while loop:

Iteration 1:

i = 1, j = 1, carry = 0
Get the current digits: digitA = 9, digitB = 9
Calculate the sum: sum = 9 + 9 + 0 = 18
Extract the rightmost digit: digitSum = 8
Update result: result = "8"
Calculate the carry: carry = Math.floor(18 / 10) = 1
Decrement the indices: i = 0, j = 0
Iteration 2:

i = 0, j = 0, carry = 1
Get the current digits: digitA = 9, digitB = 9
Calculate the sum: sum = 9 + 9 + 1 = 19
Extract the rightmost digit: digitSum = 9
Update result: result = "98"
Calculate the carry: carry = Math.floor(19 / 10) = 1
Decrement the indices: i = -1, j = -1
Exit the while loop since both i and j are less than 0.

Prepend the remaining carry to the result:

Update result: result = "198"
Return the final result: "198"

*/
