/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

pseudocode:
create array of alphabet
use alphabetArr.indexOf(letter) to find the index, also add 1 because we dont want 0 at a;

return text requirement with template literals returning index+1

*/

function position(letter) {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}

// didn't need an array, could've just used a string;
// things to consider, convert to lowercase because uppercase won't be in array.
