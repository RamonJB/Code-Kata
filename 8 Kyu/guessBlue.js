// 02/28/19

/*
  8 Kyu
  Problem provided by https://www.codewars.com/kata/thinkful-number-drills-blue-and-red-marbles
*/

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let totalBlueLeft = blueStart - bluePulled;
  let totalRedLeft = redStart - redPulled;
  let totalMarblesLeft = totalBlueLeft + totalRedLeft;

  return totalBlueLeft / totalMarblesLeft;
}
