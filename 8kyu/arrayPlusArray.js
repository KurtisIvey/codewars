/*

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

pseudocode: use reduce on each arr and add them together

*/

function arrayPlusArray(arr1, arr2) {
  const sum1 = arr1.reduce((acc, curr) => {
    return acc + curr;
  });
  const sum2 = arr2.reduce((acc, curr) => {
    return acc + curr;
  });

  return sum1 + sum2;
}

/*
better method:
concat the two arrays, so we only need 1 reduce function
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

*/
