// 03/04/19

/*
  7 Kyu
  Problem provided by https://www.codewars.com/kata/546e2562b03326a88e000020
*/

function squareDigits(num) {
  // Make an array out of the digits of num.
  let numArray = Array.from(num.toString()).map(Number);

  // Square each individual digit.
  for(let i = 0; i < numArray.length; i++)
    numArray[i]*=numArray[i];

  // Join each individual squared digit into a single string.
  let squaredNum = numArray.join("");

  // Use parseInt to retrieve the "squaredNum" from the string.
  return parseInt(squaredNum);
}
