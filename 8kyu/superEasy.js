/*

Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


pseudocode
    first create if to determine type and set strict equality operator
        if typeof x === string return "Error"
        -- if doesn't trigger
        return (x * 50 + 6)

*/

function problem(x) {
  if (typeof x === "string") return "Error";
  return x * 50 + 6;
}
