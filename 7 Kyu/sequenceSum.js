// 03/14/19: Happy Pi Day! :)

/*
  7 Kyu
  Problem provided by https://www.codewars.com/kata/sum-of-a-sequence
*/

function sequenceSum(begin, end, step) {
  if(begin > end)
    return 0;

  let sum = 0;
  for(let i = begin; i <= end; i+=step)
    sum+=i;

  return sum;
}
