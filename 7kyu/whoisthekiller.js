/* Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'


// p: suspects that's an object, dead that's an array
    r: return the key that has the dead in their arr
    pseudocode: 
        iterate through suspects
        check for every key if they contain the dead in their array
        if seen both, return key name
 */

function killer(suspectInfo, dead) {
  // iterate through obj
  for (let suspect in suspectInfo) {
    const containsDead = dead.every((item) =>
      suspectInfo[suspect].includes(item)
    );
    if (containsDead) {
      return suspect;
    }
  }
}
