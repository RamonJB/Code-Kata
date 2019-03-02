// 03/01/19

/*
  Write a function, persistence, that takes in a positive parameter num and 
  returns its multiplicative persistence, which is the number of times you must 
  multiply the digits in num until you reach a single digit.

  For example:

  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                        // and 4 has only one digit

  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                          // 1*2*6 = 12, and finally 1*2 = 2

  persistence(4) === 0 // because 4 is already a one-digit number
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