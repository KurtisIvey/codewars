/*

in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

*/

// use for loop to iterate through string.
// going to construct new var, which we'll add the index letter to if not vowel
// return new var

function shortCut(string) {
  let newWord = "";
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (
      letter !== "a" &&
      letter !== "e" &&
      letter !== "i" &&
      letter !== "o" &&
      letter !== "u"
    ) {
      newWord += letter;
    }
  }
  return newWord;
}

// also consider regex for easiest solution

/*

function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

*/
