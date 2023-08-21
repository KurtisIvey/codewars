/*
p: word in any casing
r: return string of natoPhonetic
ep:
    convert string to uppercase to retrieve key in letters obj
    create var empty string
    for loop iterate through and add corresponding value + " "
    return word.slice(0, -1) to remove the last space.
*/

var nato = (function () {
  var letters = {
    A: "Alpha",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "X-ray",
    Y: "Yankee",
    Z: "Zulu",
  };

  return function (word) {
    let output = "";
    for (let letter of word) {
      output += `${letters[letter.toUpperCase()]} `;
    }
    return output.slice(0, -1);
  };
})();

// better approach possibly:
return function (word) {
  return word
    .toUpperCase()
    .split("")
    .map(function (l) {
      return letters[l];
    })
    .join(" ");
};

// all uppercase, split "", map through to return nato val, join with " " space
