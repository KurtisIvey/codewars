/*

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).


pseudocode:
    triangle inequality theorem

    sum of any 2 sides must be greater  than the third side
    must satisfy all 3 combos
*/

function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) return true;
  return false;
}

// shorter

/* function isTriangle(a,b,c) // since we need a bool, we can just return 
{
   return a + b > c && a + c > b && c + b > a;
} */
