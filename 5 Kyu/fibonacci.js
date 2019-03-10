// 03/10/19

/*
  5 Kyu
  Problem provided by https://www.codewars.com/kata/memoized-fibonacci
*/

function fibonacci(n) {
  // First three terms of the Fibonacci sequence.
  let f_0 = 0;
  let f_1 = 1;
  let f_2 = 1;

  // If n is one of the first three terms of the sequence, return the constant.
  if(n == 0)
    return f_0;
  else if(n == 1)
    return f_1;
  else if(n == 2)
    return f_2;

  // Calculates the next Fibonacci number and stores it in f_2.
  for(let i = 3; i <= n; i++){
    f_0 = f_1;
    f_1 = f_2;
    f_2 = f_0 + f_1;
  }

  return f_2;
}
