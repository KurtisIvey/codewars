/* Finish the solution so that it takes an input n (integer) and returns a 
string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647

Examples
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235" 

p: integer of n
r: return string with commas in appropriate spot
ep: 
    turn n to string.
    create output string
    then for loop
        if i > 0 && numStr.lenght - i % 3 === 0
        add a ,
        output str + numStr

    return output str
    

*/

function formatNumberWithCommas(n) {
  if (n >= 0 && n < 2147483647) {
    // Convert the number to a string to iterate through its digits
    const numStr = String(n);
    // Initialize an empty string to store the formatted result
    let formattedStr = "";
    // Iterate through each character of the number's string representation
    for (let i = 0; i < numStr.length; i++) {
      // Check if we need to insert a comma after every three digits (except the first group)
      // 1 234 567
      // 1,234, 567
      if (i > 0 && (numStr.length - i) % 3 === 0) {
        formattedStr += ","; // Insert a comma at the appropriate position
      }
      formattedStr += numStr[i]; // Append the current digit to the formatted string
    }
    return formattedStr; // Return the final formatted string
  } else {
    throw new Error(
      "Input number out of range. Please ensure 0 <= n < 2147483647."
    );
  }
}

// quick way
function groupByCommas(n) {
  return n.toLocaleString();
}

function groupByCommas(n) {
  // Assuming 'n' is a number (integer) that needs to be formatted with commas
  // For example: n = 1234567

  // The toLocaleString() method is a built-in JavaScript method for numbers
  // It formats a number with grouped thousands and a specified number of decimal places
  // In this case, we are not specifying any decimal places, so it will only format the integer part
  // The method automatically adds commas to separate every three digits

  return n.toLocaleString();
  // Returns the formatted number as a string with commas inserted
  // For example: "1,234,567"
}
