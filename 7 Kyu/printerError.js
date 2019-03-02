// 03/02/19

/*
  7 Kyu
  Problem provided by https://www.codewars.com/kata/printer-errors
*/

function printerError(s) {
  let errorCount = 0;
  let printerErrorFraction = "";

  // If the character at index i is after 'm', then it's an error.
  for(let i = 0; i < s.length; i++)
    if(s[i] > 'm')
      errorCount++;
  
  return errorCount + "/" + s.length;
}
