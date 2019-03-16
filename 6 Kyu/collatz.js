// 03/15/19

/*
  6 Kyu
  Problem provided by https://www.codewars.com/kata/collatz
*/

function collatz(n) {
  if(n == 1)
    return "1";

  let arrowString = "->";
  let collatzString = "" + n + arrowString;

  while(n > 1) {
    if(n % 2 == 0) {
      n/=2;

      if(n == 1) {
        collatzString+=n;
        break;
      }
      
      else collatzString+=n+arrowString;
    }

    else if(n % 2 == 1) {
      n = (3 * n) + 1;
      collatzString+=n+arrowString;
    }
  }

  return collatzString;
}
