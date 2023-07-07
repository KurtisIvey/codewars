/* You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:

function eliminateUnsetBits(number);
Examples
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0

goal: remove everything but '1's . string is binary
afterwards return the binary value as a number

pseudocode: if num doesn't include any 1's return 0
otherwise, use regex to filter out all nums except 1
then wrap in parseInt(numString, 2). the 2 is there for binary conversion
return that value */

function eliminateUnsetBits(number) {
  if (!number.includes("1")) return 0;
  return parseInt(number.replace(/[^1]/g, ""), 2);
}
