/*

Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

using a class

pseudocode:
    first define static numerals for reference in functions
    able to migrate previous solutions from leet code and codewars into this. 
*/

class RomanNumerals {
  static numerals = [
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

  static toRoman(num) {
    let romanNumeral = ""; // stores roman numeral to return at end in string
    let number = num; // num val that is changes throughout loop

    // loops through array of numerals and adjust number
    for (let i = 0; i < RomanNumerals.numerals.length; i++) {
      const { value, symbol } = RomanNumerals.numerals[i]; // Destructure value and symbol from numerals

      // while loop to continue looping until nothign left
      while (number >= value) {
        number -= value;
        romanNumeral += symbol;
      }
    }

    return romanNumeral;
  }

  static fromRoman(s) {
    let output = 0;
    for (let i = 0; i < s.length; i++) {
      // keep track of symbol vars during for loop to match with numerals
      const currentSymbol = s[i];
      const nextSymbol = s[i + 1];
      // keep track of combined because we want to check first
      const combinedSymbol = currentSymbol + nextSymbol;

      // some method to find the numeral within the array of objects.
      // check combined first
      if (
        RomanNumerals.numerals.some(
          (numeral) => numeral.symbol === combinedSymbol
        )
      ) {
        const matchingNumeral = RomanNumerals.numerals.find(
          (numeral) => numeral.symbol === combinedSymbol
        );
        output += matchingNumeral.value;
        i++; // skip the next symbol since it was already processed
      } else {
        const matchingNumeral = RomanNumerals.numerals.find(
          (numeral) => numeral.symbol === currentSymbol
        );
        // add to output
        output += matchingNumeral.value;
      }
    }
    return output;
  }
}
