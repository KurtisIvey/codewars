/*
p: array of nums or a null val
r: return sorted arraay of nums or null
ep:
    auto return empty array if null
    else implement basic sort and return arr

*/

function solution(nums) {
    return nums === null? []: nums.sort((a,b) => a-b)
} 

// testing