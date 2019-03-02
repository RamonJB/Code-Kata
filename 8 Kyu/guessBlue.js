// 02/28/19

/*
  8 Kyu
  Problem provided by https://www.codewars.com/kata/5862f663b4e9d6f12b00003b
*/

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let totalBlueLeft = blueStart - bluePulled;
  let totalRedLeft = redStart - redPulled;
  let totalMarblesLeft = totalBlueLeft + totalRedLeft;

  return totalBlueLeft / totalMarblesLeft;
}
