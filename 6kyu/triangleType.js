/*
In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).


pseudocode
use triangle inequality theorem
    - check if sides can form triangle. 
    - check for right triangle
    - chekc for obtuse triangle
    - if doesn't meet others, its acute
*/

function triangleType(a, b, c) {
  // Check if the sides can form a triangle
  if (a + b <= c || a + c <= b || b + c <= a) {
    return 0; // Not a triangle
  }

  // Check for a right triangle
  if (
    a * a + b * b === c * c ||
    a * a + c * c === b * b ||
    b * b + c * c === a * a
  ) {
    return 2; // Right triangle
  }

  // Check for an obtuse triangle
  if (a * a + b * b < c * c || a * a + c * c < b * b || b * b + c * c < a * a) {
    return 3; // Obtuse triangle
  }

  // If none of the above conditions are met, it is an acute triangle
  return 1; // Acute triangle
}
