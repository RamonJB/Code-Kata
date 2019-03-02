// 03/01/19

/*
  6 Kyu
  Problem provided by https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
*/

function persistence(num) {
  if(num < 10)
    return 0;

  // Product of individual digits of num.
  let numProduct = 1;

  // Number of times we have to break down num to get a single digit.
  let persistenceNum = 0;

  // First breakdown of num into an array.
  let persistenceArray = Array.from(num.toString()).map(Number);

  for(let i = 0; i < persistenceArray.length; i++) 
    numProduct*=persistenceArray[i];

  // Increment number of times we had to break down num to reach a single digit.
  persistenceNum++;

  // If the numProduct >=10 then we have to break it down until it is a single 
  // digit using the same method from earlier. 
  while(numProduct >= 10) {
    let numProductArray = Array.from(numProduct.toString()).map(Number);

    // Have to reset value of numProduct, otherwise we're multiplying by values
    // from earlier.
    numProduct = 1;
    for(let i = 0; i < numProductArray.length; i++)
      numProduct*=numProductArray[i];

    persistenceNum++;
  }

  return persistenceNum;
}
