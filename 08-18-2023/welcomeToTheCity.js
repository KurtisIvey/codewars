/*
p: name arr, city str, state str
r: return string in proper format
ep:
    name must be joined via empty spaces to output correctly
    return as template literal string with arguments passed through
*/

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}
