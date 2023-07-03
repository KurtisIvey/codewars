/*
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

pseudocode:
    use regex to replace chars that are vowels in string with "".
        - due to failing tests on special non alphabet chars, also replace anything not alphabet w/o vowels w/ ""
    return modifiedString.length

*/

function consonantCount(str) {
  return str.replace(/[^a-zA-Z]/g, "").replace(/[aeiou]/gi, "").length;
}
