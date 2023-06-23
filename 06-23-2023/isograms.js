/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false 

pseudocode:

    use new Set with the str as argument and converted to lowercase. Then compare string.length to set.size

*/

function isIsogram(str) {
  const newSet = new Set(str.toLowerCase());
  return newSet.size === str.length;
}

// one line in fucntion:

function isIsogram2(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
