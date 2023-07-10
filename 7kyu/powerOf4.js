/*
Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)

Examples
powerOf4(1024) // returns true
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false

p: take in num
r: return boolean, strings return false. must be type int

ep: pseudocode:
    possibly use exponent operator
        perform check if type is string. if so, return false
    use while Loop
    divid number by 4 , if not divisible by 4 its not a power of 4 return false
    continue dividing by 4
*/
function powerOf4(n) {
  // Check if n is not an integer, return false
  if (!Number.isInteger(n)) {
    return false;
  }
  // Check if n is less than or equal to 0, return false
  if (n <= 0) {
    return false;
  }
  // Repeat until n becomes 1 or less
  while (n > 1) {
    // Check if n is not divisible by 4, return false
    if (n % 4 !== 0) {
      return false;
    }
    // Divide n by 4
    n /= 4;
  }
  // At this point, n is 1, indicating it is a power of 4
  return true;
}
