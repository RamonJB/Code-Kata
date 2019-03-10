// 03/09/19

/*
  7 Kyu
  Problem provided by https://www.codewars.com/kata/all-star-code-challenge-number-22
*/

function toTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - (hours * 3600)) / 60);

  return hours + " hour(s) and " + minutes + " minute(s)";
}
