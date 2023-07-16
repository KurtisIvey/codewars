/* For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.

Please leave feedback for this kata. Cheers! 

p: take in x of unknown type
r. returning string of appropriate text
ep:
    need to create 2 ifs
    1st for determining if string using typeof
    2nd for determining if number since typeof if int or float returns number
    finally, if neither, return appropriate text for dog specificiation
*/

function cookie(x) {
  if (typeof x === "string") return "Who ate the last cookie? It was Zach!";
  if (typeof x === "number") return "Who ate the last cookie? It was Monica!";
  return "Who ate the last cookie? It was the dog!";
}
