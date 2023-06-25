/*
Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1
Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

  countChange(4, [1,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0

pseudocode:
  first convert to positive if it's a negative integer
  then convert to string and split('') and use reduce but passing parseInt over curr;
  return sum
*/

function sumDigits(number) {
  let num;
  if (number < 0) {
    num = Math.abs(number);
  } else {
    num = number;
  }
  let stringed = num.toString();
  return stringed.split("").reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
}

// one line inside function

/* function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
} */
