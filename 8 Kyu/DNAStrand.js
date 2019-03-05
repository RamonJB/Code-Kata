// 01/17/19

/*
  8 Kyu
  Problem provided by https://www.codewars.com/kata/complementary-dna
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
