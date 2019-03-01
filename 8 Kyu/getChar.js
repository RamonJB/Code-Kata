// 02/28/19

/*
  8 Kyu
  Problem provided by https://www.codewars.com/kata/55ad04714f0b468e8200001c

  Get character from ASCII Value

  Write a function getChar which takes a number and returns the corresponding 
  ASCII char for that value.

  Example:
  getChar(65) # => 'A'
*/

function getChar(c) {
  return String.fromCharCode(c);
}