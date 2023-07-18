/*
If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

We want to input a word as a string, and return a list representing that word as a taco.

Key

all vowels (except 'y') = beef

t = tomato

l = lettuce

c = cheese

g = guacamole

s = salsa

NOTE
We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

Note that no matter what ingredients are passed, our taco will always have a shell.

p: take in a string of chars
r: return array that will always start with 'shell' as 0 index
ep:
    create obj with key and vals as indicated
    convert word to lowercase for consistency
    iterate of word input, and add corresponding val via push to output arr
    if aeiou push beef
    after iterating, then .push another shell
*/
function tacofy(word) {
  const ingred = {
    t: "tomato",
    l: "lettuce",
    c: "cheese",
    g: "guacamole",
    s: "salsa",
  };
  let output = ["shell"];
  const lowercaseWord = word.toLowerCase();
  for (let i = 0; i < lowercaseWordWord.length; i++) {
    const char = lowercaseWord[i];
    if (char in ingred) {
      output.push(ingred[char]);
    } else if ("aeiou".includes(char)) {
      output.push("beef");
    }
  }
  output.push("shell");
  return output;
}
