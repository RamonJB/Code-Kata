// 03/13/19

/*
  6 Kyu
  Problem provided by https://www.codewars.com/kata/framed-reflection
*/

function mirror(text) {
  // Get each seperate word from the text string.
  let textArray = text.split(' ');
  
  // Each side of the mirror.
  let leftSide = "* ", rightSide = " *", topBottomSide = "";
  let longestWord = 0;

  // Reversing each word and finding the longest word.
  for(let i = 0; i < textArray.length; i++) {
    textArray[i] = reverseString(textArray[i]);

    if(textArray[i].length > longestWord)
      longestWord = textArray[i].length;
  }

  // Longest word dictates how long the top and bottom sides of the mirror are.
  for(let i = 0; i < longestWord + 4; i++)
    topBottomSide+="*";

  // Filling in the top and bottom of the mirror.
  let mirrorArray = new Array(topBottomSide.length).fill("");
  mirrorArray[0]+=topBottomSide+"\n";
  mirrorArray[mirrorArray.length - 1]+=topBottomSide;

  // Filling in the left and right sides and the reversed words into the mirror.
  for(let i = 0; i < textArray.length; i++) {
    mirrorArray[i]+=leftSide+textArray[i]; //+rightSide+"\n";

    let numSpaces = longestWord - textArray[i].length;
    for(let j = 0; j < numSpaces; j++)
      mirrorArray[i]+=" ";

    mirrorArray[i]+=rightSide+"\n";
  }
  
  return mirrorArray.join('');
}

function reverseString(s) {
  return s.split("").reverse().join("");
}
