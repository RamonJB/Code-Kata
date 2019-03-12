// 03/11/19

/*
  7 Kyu
  Problem provided by https://www.codewars.com/kata/find-count-of-most-frequent-item-in-an-array
*/

function mostFrequentItemCount(collection) {
  if(collection.length == 0)
    return 0;

  let intMap = new Map();

  for(let value of collection) {
    if(!intMap.has(value))
      intMap.set(value, 1);

    else intMap.set(value, intMap.get(value) + 1);
  }

  let max = 0;
  for(let [key, value] of intMap.entries())
    if(value > max)
      max = value;
  
  return max;
}
