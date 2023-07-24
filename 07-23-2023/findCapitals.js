/* Write a function that takes a single string (word) as argument. The 
function must return an ordered list containing the indexes of 
all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); 

p: taking in string
r: return the index in an output arr where the string chars are capitalized
ep:
    create output arr
    for loop
    iterate through
    get char code
        if code >=65 && code<=90
        output arr.push i
    return output
*/

function capitals(word) {
  let output = [];
  for (let i = 0; i < word.length; i++) {
    // Get the Unicode code point of the character
    const code = word.charCodeAt(i);
    // Check if the code point falls within the range of capitalized characters
    // push to output if true
    if (code >= 65 && code <= 90) output.push(i);
  }
  return output;
}

// non char code way
var capitals = function (word) {
  var caps = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};
