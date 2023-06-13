/*

Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)  false 
is_prime(2)  true  
is_prime(-1) false 

*/

/*

take num
handle less than or equal to 1 to return false
2 & 3 are prime, so need to handle those
afterwards, use for loops and take sqrt of num to increment the nums up to the sqrt to find %===0
  if === 0, return false

  return true if reach bottom of function
*/

function isPrime(num) {
  // handle nums less than or equal to 1 which are not prime
  if (num <= 1) return false;
  // handle 2 & 3 which are prime
  if (num <= 3) return true;

  // creates loop that increments up to sqrt of num to check if prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // if % === 0 returns false because its not prime
      return false;
    }
  }

  return true;
}
