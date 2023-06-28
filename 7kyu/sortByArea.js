/*
In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]

pseudocode
    create helper functions for calc rectangeArea & circle area
    use built in sorting
    if Item is array do rectange, else do circle

    return array.sort with custom sort alg
*/
function sortByArea(array) {
  let output = [];

  function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let sum = array[i].reduce((acc, curr) => {
        return acc * curr;
      }, 1);
      output.push(sum);
    } else {
      let area = circleArea(array[i]);
      output.push(area);
    }
  }

  return output;
}
