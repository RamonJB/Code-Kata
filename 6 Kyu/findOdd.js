// 03/06/19

/*
  6 Kyu
  Problem provided by https://www.codewars.com/kata/find-the-odd-int
*/

function findOdd(A) {
  let intMap = new Map();

  // Count how many times each int in array A appears.
  for(let i = 0; i < A.length; i++) {
    // Adds in new ints and increments their count by one.
    if(!intMap.has(A[i]))
      intMap.set(A[i], 1);

    // Increments the count of ints that are already in the map.
    else intMap.set(A[i], intMap.get(A[i]) + 1);
  }

  // Find the int that was in array A an odd amount of times.
  for(let [key, value] of intMap.entries()) {
    if(value % 2 == 1)
      return key;
  }

  return 0;
}
