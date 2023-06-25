/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"


pseudocode:
    first case to reject different lengths
    convert test and original to array and set all to lower case since case insensitive
    sort both arrays

    run for loop to compare each char, return false if char don't match

    return true if for loop runs full length
*/

function isAnagram(test, original) {
  if (test.length !== original.length) return false;

  const testChars = Array.from(test.toLowerCase());
  const originalChars = Array.from(original.toLowerCase());

  testChars.sort();
  originalChars.sort();

  for (let i = 0; i < testChars.length; i++) {
    if (testChars[i] !== originalChars[i]) return false;
  }
  return true;
}
