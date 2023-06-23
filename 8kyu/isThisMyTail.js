/* Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.

function correctTail(bod, tail ;
  
    sub = body.substr(bodylength-(tail.length)
    
    if sub = tail) ;
      return true
    }
    else 
      return false
  
pseudocode: trash everything and use slice to compare last char of body to tail. return whether that equals tail
  
      */

function correctTail(body, tail) {
  return body.slice(-1) === tail;
}

// faster than my solution since no new array is made:

function correctTail2(bod, tail) {
  return bod[bod.length - 1] === tail;
}
