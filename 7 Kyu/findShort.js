// 03/15/19

/*
  7 Kyu
  Problem provided by https://www.codewars.com/kata/shortest-word
*/

function findShort(s) {
  let wordsArray = s.split(' ');
  let min = Number.MAX_SAFE_INTEGER;

  for(let i = 0; i < wordsArray.length; i++) {
    if(wordsArray[i].length < min)
      min = wordsArray[i].length;
  }

  return min;
}
