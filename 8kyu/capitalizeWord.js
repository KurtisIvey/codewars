/*

Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

*/

/*

    create new letter var based on first letter of passed through word.
        we then uppercase that var
        we then create a new word that uses the new letter + word.slice(1).
            word.slice(1) includes everything after index 0 of word

        we return new word with first index letter capitalized
*/

// space time complexity of O(1)
function capitalizeWord(word) {
  let newLetter = word[0].toUpperCase();
  let newWord = newLetter + word.slice(1);
  return newWord;
}
