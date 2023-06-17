/*

The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 

*/

/*

first source the fibonacci code in js

    goal: find the consecutive numbers in the fib sequence that equal or are close to the number.
            if they don't equal the num, return false as the third list param
            1st: prev num, 2nd: 2nd num, bool

    pseudocode
        we have a product from multiplication we aim towards
        run the fib sequence,  
              const sequence = [0, 1];

            // Generate Fibonacci indefinitely until finding param at which point we'll return out of it
            for (let i = 2; i <= n; i++) {
                // Calculate the next Fibonacci number by adding the previous two numbers
                const prevNumber = sequence.slice(-1)
                const nextNumber = sequence[i - 1] + sequence[i - 2];
                if(prevNumber*nextNumber > target){
                    return [prevNumber, nextNumber, false]
                }
                if(prevNumber*nextNumber === target){
                    return [prevNumber, nextNumber, true]
                }
                sequence.push(nextNumber);
            }

        return false

*/

function productFib(prod) {
  const sequence = [0, 1];
  const output = [];
  // Generate Fibonacci sequence up to the specified number
  for (let i = 2; ; i++) {
    // Calculate the next Fibonacci number by adding the previous two numbers, must have index zero for only elem
    const prevNumber = sequence.slice(-1)[0];

    const nextNumber = sequence[i - 1] + sequence[i - 2];
    // if it breaks past prod target
    // also limits for loop by breaking out if it exceeds.
    // these are the only 2 params that exit the loop
    if (prevNumber * nextNumber > prod) {
      // we add to output array via push
      output.push(prevNumber, nextNumber, false);
      break;
    }
    // if equals prod target, return true for third param pushed to output arr
    if (prevNumber * nextNumber === prod) {
      output.push(prevNumber, nextNumber, true);
      break;
    }
    sequence.push(nextNumber);
  }

  // Return the generated sequence
  return output;
}
