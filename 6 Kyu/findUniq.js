// 03/03/19

/*
  6 Kyu
  Problem provided by https://www.codewars.com/kata/find-the-unique-number-1/
*/

function findUniq(arr) {
  let uniqMap = new Map();

  // If the value isn't keyed, put it in uniqMap and put its' count to 1. Else,
  // increment the count of the keyed value. 
  for(let i = 0; i < arr.length; i++) {
    if(!uniqMap.has(arr[i]))
      uniqMap.set(arr[i], 1);
    
    else uniqMap.set(arr[i], uniqMap.get(arr[i]) + 1);
  }

  // Looking for the key with the value of 1 as that indicates it's unique.
  for(let [key, value] of uniqMap.entries()) {
    if(value == 1)
      return key;
  }

  return arr[0];
}
