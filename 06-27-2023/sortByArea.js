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
  // Helper function to calculate the area of a rectangle
  function calculateRectangleArea(dimensions) {
    return dimensions[0] * dimensions[1];
  }

  // Helper function to calculate the area of a circle
  function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }

  // Create an array of objects containing the shape, area, and original index
  const areas = array.map((shape, index) => {
    const area = Array.isArray(shape)
      ? calculateRectangleArea(shape)
      : calculateCircleArea(shape);
    return { shape, area, index };
  });

  // Sort the areas array based on the area value
  areas.sort((a, b) => a.area - b.area);

  // Create a new array to hold the sorted shapes
  const sortedArray = areas.map((item) => item.shape);

  return sortedArray;
}
