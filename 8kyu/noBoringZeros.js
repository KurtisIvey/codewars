/* Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105 

pseudocode:
return if 0
convert num to string
use while loop to detect if last char is 0, then slice it until a num is encountered while mutating num to string
return parse int of numString
*/

function noBoringZeros(n) {
  // instant return if int of 0
  if (n === 0) return n;
  // convert to string to allow slice method
  let numString = n.toString();

  // breaks out of loop if encounter non zero num
  while (numString[numString.length - 1] === "0") {
    // removes very last element
    numString = numString.slice(0, -1);
  }
  return parseInt(numString);
}
