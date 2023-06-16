/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


// pseudocode

create 2 vars to keep track of x and o count

use for loop
convert str to lowercase
    if equal 'x' add to string the x
    if equal 'o' add to the string the o


    return o === x;
*/

function XO(str) {
  let lowercased = str.toLowerCase();
  let x = "";
  let o = "";

  for (let i = 0; i < lowercased.length; i++) {
    if (lowercased[i] === "x") {
      x += lowercased[i];
    } else if (lowercased[i] === "o") {
      o += lowercased[i];
    }
  }
  return x.length === o.length;
}

console.log(XO("jklsdxfxjko"));
