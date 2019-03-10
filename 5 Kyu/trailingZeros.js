// 03/02/19

/*
  5 Kyu
  Problem provided by https://www.codewars.com/kata/number-of-trailing-zeros-of-n

  Helpful Link for this problem: http://mathworld.wolfram.com/Factorial.html
*/

function zeros(n) {
  // Based off the formula for calculating trailing zeros.
  const kMax = Math.floor(Math.log(n) / Math.log(5));
  let Z = 0;

  for(let k = 1; k <= kMax; k++)
    Z+=Math.floor(n / Math.pow(5, k));

  return Z;
}
