// 03/02/19

/*
  6 Kyu
  Problem provided by https://www.codewars.com/kata/playing-with-digits
*/

function digPow(n, p) {
  // Create an array of the digits of n.
  let nDigitsArray = Array.from(n.toString()).map(Number);

  let nSum = 0;
  for(let i = 0; i < nDigitsArray.length; i++) {
    nSum+=(Math.pow(nDigitsArray[i], p));
    p++;
  }

  if(Number.isInteger(nSum / n))
    return nSum / n;

  return -1;
}
