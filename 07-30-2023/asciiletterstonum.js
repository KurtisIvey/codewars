/*
p: number string
r: return the string
ep:
    convert int string into an array seperated by every 2 chars using regex
    iterate through array
    convert using fromCharCode

    return new string;
*/

function convert(number) {
  const arr = number.match(/.{1,2}/g) || [];
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output.push(String.fromCharCode(parseInt(arr[i])));
  }
  return output;
}
