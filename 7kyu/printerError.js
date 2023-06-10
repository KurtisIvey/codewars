/*

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

*/

/*
pseudocode



cannot have letter in alphabet after m
therefore, we'll use ascii to check each char
use for loop to iterate through array
    check char code via charCode and if it's greater than m char code, it's an error
    we'll add to the errors variable that starts at 0
we'll need 1 var to store the errors
when finished we'll return errors/letters.length

*/

function printerError(s) {
  let errors = 0;
  for (let i = 0; i < s.length; i++) {
    let asciiCode = s[i].charCodeAt(0);

    if (asciiCode < 97 || asciiCode > 109) {
      errors++;
    }
  }
  return `${errors}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjmz"));
