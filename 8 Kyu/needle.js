// 09/18/19

/*
    8 Kyu
    Problem provided by https://www.codewars.com/kata/a-needle-in-the-haystack/
*/

function findNeedle(haystack) {
  let needleIndex;
  for(let i = 0; i < haystack.length; i++) {
      if(haystack[i] == "needle") {
          needleIndex = i;
      }
  }

  return "found the needle at position " + needleIndex;
}
