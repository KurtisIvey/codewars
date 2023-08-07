/*
p: string with two ints sep by +
r: return the integer sum of the two ints
ep:
    have a string of the alphabet
    split and define a & b
    get index of each char in alphabet string
    add the indexes + 1 on each together and return it

*/

function theVar(theVariables) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const [a, b] = theVariables.split("+");
    let output = parseInt(alphabet.indexOf(a) + 1) + parseInt(alphabet.indexOf(b) + 1);
    return output;
  }
  
