// 03/01/19

/*
  6 Kyu
  Problem provided by https://www.codewars.com/kata/541c8630095125aba6000c00
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
