// 09/18/19

/*
  7 Kyu
  Problem provided by https://www.codewars.com/kata/longest-vowel-chain/train
*/

function solve(s) {
  // Keeps track of the longest chain of vowels found
  let longestChain = 0;
  
  // Keeps track of the current chain of vowels until a non-vowel is found
  let currentChain = 0;

  for(let i = 0; i < s.length; i++) {
    // If s[i] is a vowel, increment currentChain
    if(s.charAt(i) == "a" || s.charAt(i) == "e" || s.charAt(i) == "i" || 
    s.charAt(i) == "o" || s.charAt(i) == "u") {
      currentChain++;
    }

    // Else s[i] isn't a vowel, check if the current chain is longer than the
    // longest chain. If it is, we have the new longest chain
    else {
      if(currentChain > longestChain) {
        longestChain = currentChain;
      }
      // Reset currentChain for next iteration
      currentChain = 0;
    }
  }

  return longestChain;
}
