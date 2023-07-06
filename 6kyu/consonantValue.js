/* Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 +  

pseudocode;
create string called alpha. contains alphabet in string format

we'll then filter out any vowels via the filter method to return filteredString;

define output using reduce on filtered string to add parseInt(filteredString.indexOf(curr)) + 1

return output
*/

function solve(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let maxVal = 0; // Keep track of the highest value of consonant substrings
  let currentVal = 0; // Keep track of the value of the current consonant substring

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!"aeiou".includes(char)) {
      // If the character is a consonant, add its corresponding value to the currentValue
      currentVal += parseInt(alphabet.indexOf(char)) + 1;
    } else {
      // vowel found, must compare max val and current val. reset current val to 0;
      maxVal = Math.max(maxVal, currentVal);
      currentVal = 0;
    }
  }
  // Update maxValue again in case the last consonant substring has a higher value
  maxVal = Math.max(maxVal, currentVal);
  return maxVal;
}
