/*
p: array of nums
r: return square root nums
ep: if num has square root of it return that in array. Else square the integer
    return new array
*/

function squareOrSquareRoot(array) {
  return array.map((num) => {
    const squareRoot = Math.sqrt(num);

    if (Number.isInteger(squareRoot)) {
      return squareRoot;
    } else {
      return num * num;
    }
  });
}
