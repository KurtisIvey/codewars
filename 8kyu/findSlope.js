/*
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope
y2-y1
/
x2-x1

== m

*/
function slope(points) {
  // destructure
  const [a, b, c, d] = points;
  let x = c - a;
  let y = d - b;
  return x === 0 ? "undefined" : String(y / x);
}

// further optimized:
// array destructuring from the beginning
function slope([x1, y1, x2, y2]) {
  let slope = (y2 - y1) / (x2 - x1);
  return Number.isFinite(slope) ? `${slope}` : "undefined";
}
