// 02/28/19

/*
  8 Kyu
  Problem provided by https://www.codewars.com/kata/5556282156230d0e5e000089
*/

// Alternate solution that utilizes short-circuiting.
function DNAtoRNAalternate(dna) {
  let RNA = "";

  for(let i = 0; i < dna.length; i++) {
    if(dna.charAt(i) == "T")
      RNA+="U";
    else RNA+=dna.charAt(i);
  }

  return RNA;
}

// Brute-force solution. No short-circuiting.
function DNAtoRNA(dna) {
  let RNA = "";

  for(let i = 0 ; i < dna.length; i++) {
    switch(dna.charAt(i)) {
      case "G":
        RNA+="G";
        break;
      case "C":
        RNA+="C";
        break;
      case "A":
        RNA+="A";
        break; 
      case "T":
        RNA+="U";
        break;   
    }
  }

  return RNA;
}
