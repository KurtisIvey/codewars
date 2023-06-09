/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

// dumb fancy solution
function twoSort(s) {
  let sorted = s.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      const charCodeA = a.charCodeAt(i);
      const charCodeB = b.charCodeAt(i);

      if (charCodeA !== charCodeB) {
        return charCodeA - charCodeB;
      }
    }
    return a.length - b.length;
  });

  return sorted[0].split("").join("***");
}

// better solution...after seeing solutions

function twoSort(s) {
  s.sort();
  return s[0].split("").join("***");
}
