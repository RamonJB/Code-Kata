// 01/17/19

/*
  8 Kyu
  Problem provided by https://www.codewars.com/kata/554e4a2f232cdd87d9000038

  Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and 
  carries the "instructions" for the development and functioning of living organisms.

  If you want to know more http://en.wikipedia.org/wiki/DNA

  In DNA strings, symbols "A" and "T" are complements of each other, as "C" and 
  "G". You have function with one side of the DNA (string, except for Haskell); 
  you need to get the other complementary side. DNA strand is never empty or there 
  is no DNA at all (again, except for Haskell).

*/

function DNAStrand(dna) {
  let compDNA = "";

  for(let i = 0; i < dna.length; i++) {
    if(dna.charAt(i) === "A")
      compDNA += "T";
    else if(dna.charAt(i) === "T")
      compDNA += "A";
    else if(dna.charAt(i) === "G")
      compDNA += "C";
    else if(dna.charAt(i) === "C")
      compDNA += "G";
  }

  return compDNA;
}

function DNAStrand(dna) {
  let compDNA = "";

  for(let i = 0; i < dna.length; i++) {
    switch(dna.charAt(i)) {
      case "A":
        compDNA += "T";
        break;
      case "T":
        compDNA += "A";
        break;
      case "G":
        compDNA += "C";
        break;
      case "C":
        compDNA += "G";
        break;
    }
  }

  return compDNA;
}