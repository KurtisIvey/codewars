/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""


pseudocode
    if length === 0, return ""
    create an all lowercase version
    create an empty var for the new version to be returned

    use for loop, when we detect a non matching char due to capitilization,
        var =+ ` ${char[i]}`

    return new var;
*/

function breakCamelCase(string) {
  if (string.length === 0) return "";
  if (string.length === 1) return string;

  // we create a comparison string to iterate over in the for loop
  const lowerCased = string.toLowerCase();
  let output = ""; // empty to be added to later

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char !== lowerCased[i]) {
      // if it doesn't equal, then it must be capitalized, so we add a space and the char which will still be capitalized
      output += ` ${char}`;
    } else {
      // we just add the char to the output because it is lowercase
      output += char;
    }
  }
  // return out new string "output" that now has spaces in it before capitalized letters
  return output;
}
