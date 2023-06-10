/*
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

*/

/*
    we're going to take the number that's b/w 1-3999. 
    we'll slice it downwards using if statements

    2 vars, the roman numeral that started empty and the number that changes from slicing

    if num > symbol num value, we slice and add the symbol to the roman numeral string
    return the roman numeral as a string
*/

function solution(number) {
  let romanNumeral = ""; // stores roman numeral to return at end in string
  let num = number; // num val that is changes throughout loop

  // objects containing value and symbols
  // had to search for all edge cases because codewars didn't give them to me...
  const numerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  // loops through array of numerals and adjust number
  for (let i = 0; i < numerals.length; i++) {
    const { value, symbol } = numerals[i]; // Destructure value and symbol from numerals

    // while loop to continue looping until nothign left
    while (num >= value) {
      num -= value;
      romanNumeral += symbol;
    }
  }

  return romanNumeral;
}
