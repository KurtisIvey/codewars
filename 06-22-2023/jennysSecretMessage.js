/*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?


// original, issue is if statement is after a return so the if is unreachable
function greet(name){
  
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}
*/

function greet(name) {
  if (name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}


/*
slim solution
function greet(name){
  return (name==="Johnny"? "Hello, my love!": "Hello, " + name + "!")

}

*/

/*
slimmer
function greet(name){
  return (name==="Johnny"? "Hello, my love!": `Hello, ${name}!`)
}

*/