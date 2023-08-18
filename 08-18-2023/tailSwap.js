/*
p: arr of strings
r: return array of 2 strings
ep:
    split each item in arr via :
    create new vars to go into output arr by recomposing the vars
    return new arr with recomposed vars
*/

function tailSwap(arr) {
  let one = arr[0].split(":");
  let two = arr[1].split(":");

  let outputOne = one[0] + ":" + two[1];
  let outputTwo = two[0] + ":" + one[1];
  return [outputOne, outputTwo];
}
