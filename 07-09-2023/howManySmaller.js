/*
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?

p// need to return array of nums with new arr listing how many nums are smaller
r return array of integer of which nums smaller than the index

pseudocode:

create empty output array
iterate with for loop
    for loop within for loop that sets a count of nums smaller
    after loop, push count to output
return output array
*/

function smaller(nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count += 1;
      }
    }
    output.push(count);
  }
  return output;
}
