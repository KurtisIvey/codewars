/*
var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

getNames(data) // should return ['Joe', 'Bill', 'Kate']

pseudocode:

create empty array
use for loop to itterate through data and push the name value into arr
return arr

*/

function getNames(data) {
  let names = [];
  for (let i = 0; i < data.length; i++) {
    names.push(data[i].name);
  }
  return names;
}

// better way
/*

// map returns an array and iterates through, item is the current elem being processed
 and item.name is being returned which adds it to the array. it continues to do that all the way through 
 the array

function getNames(data){
  return data.map(function(item){return item.name});
}

*/
