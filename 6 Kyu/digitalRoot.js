// 03/01/19

/*
  6 Kyu
  In this kata, you must create a digital root function.

  A digital root is the recursive sum of all the digits in a number. Given n, 
  take the sum of the digits of n. If that value has more than one digit, 
  continue reducing in this way until a single-digit number is produced. 
  This is only applicable to the natural numbers.

  Here's how it works:

  digital_root(16)
  => 1 + 6
  => 7

  digital_root(942)
  => 9 + 4 + 2
  => 15 ...
  => 1 + 5
  => 6

  digital_root(132189)
  => 1 + 3 + 2 + 1 + 8 + 9
  => 24 ...
  => 2 + 4
  => 6

  digital_root(493193)
  => 4 + 9 + 3 + 1 + 9 + 3
  => 29 ...
  => 2 + 9
  => 11 ...
  => 1 + 1
  => 2
*/

function digital_root(n) {
  // If n < 10, a single-digit number is already produced.
  if(n < 10)
    return n;

  // Split n into an array of ints.
  let nSumArray = Array.from(n.toString()).map(Number);

  // Find the sum of the digits of n.
  let totalSum = 0;
  for(let i = 0; i < nSumArray.length; i++)
    totalSum+=nSumArray[i];

  // If the total sum of the individual digits is still over 10, run it again
  // but with the new total sum. 
  if(totalSum > 10)
    return digital_root(totalSum);
  
  return totalSum;
}

digital_root(456)