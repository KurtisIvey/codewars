/**
 p: take in string
 r: return string split into arrays with space after word with the length
 ep: split the string via " "
    then iterate through, get the length and add " ${.length}"
    return the array
 */

function addLength(str) {
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] += ` ${strArr[i].length}`;
  }
  return strArr;
}

// less code:
function addLength(str) {
  return str.split(" ").map((s) => `${s} ${s.length}`);
}

function addLength(str) {
  // Step 1: Split the input string into an array of words using the space (" ") as the delimiter.
  // For example, if str = "Hello world", the array will be ["Hello", "world"].
  const wordsArray = str.split(" ");

  // Step 2: Use the map() method to iterate through each element (word) of the wordsArray.
  // For each word, we concatenate it with a space and its length to form a new string.
  // The map() method returns a new array with the modified strings.
  // For example, if the input was "Hello world", the mapped array will be ["Hello 5", "world 5"].
  const mappedArray = wordsArray.map((s) => `${s} ${s.length}`);

  // Step 3: Return the mappedArray, which now contains the original words from the input string,
  // concatenated with a space and their respective lengths.
  // For example, if the input was "Hello world", the output will be ["Hello 5", "world 5"].
  return mappedArray;
}
