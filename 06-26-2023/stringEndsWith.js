/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

pseudocode: 
    use for loop moving forwards on ending, moving forwards but starting at dif b/w str and ending
    ensure that it matches str or return false. if able to iterate through
    the for loop successfully, return true
*/

function solution(str, ending) {
  const endingIndex = str.length - ending.length;
  for (let i = 0; i < ending.length; i++) {
    if (ending[i] !== str[endingIndex + i]) return false;
  }
  return true;
}

// did not know about about endsWith function.
// that would be the optimum solution

function solution(str, ending) {
  return str.endsWith(ending);
}
