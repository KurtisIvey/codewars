/*
Task:
Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if 
exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

p: take in 3 seperate integers
r: return a boolean on whether at least 2 of them are greater than 0
ep:
    create new array with vars as items
    filter them to only return pos
    calc lenght of array from filter
    return bool from whether length === 2
*/

function twoArePositive(a, b, c) {
  const positiveCount = [a, b, c];
  const length = positiveCount.filter((num) => num > 0).length;

  // Check if exactly two integers are positive
  return length === 2;
}
