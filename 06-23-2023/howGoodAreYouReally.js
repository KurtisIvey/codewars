/*

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// pseudocode:

use reduce to calc avg of class points and then return bool comparing  yourpoints to avg/classpoints.length

*/

function betterThanAverage(classPoints, yourPoints) {
  let avg = classPoints.reduce((acc, curr) => {
    return acc + curr;
  });

  return yourPoints > avg / classPoints.length;
}

// one line of code in function:

function betterThanAverage2(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
}
