// 02/29/18

/*
  7 Kyu
  Problem provided by https://www.codewars.com/kata/59901cd68fc658ab6c000025
  
  There are some candies that need to be distributed to some children as fairly 
  as possible (i.e. the variance of result needs to be as small as possible), 
  but I don't know how to distribute them, so I need your help. Your assignment 
  is to write a function with signature distribute(m, n) in which m represents 
  how many candies there are, while n represents how many children there are. 
  The function should return a container which includes the number of candies 
  each child gains.

  Notice
  - The candy can't be divided into pieces.
  - The list's order doesn't matter.

  Requirements
  - The case m < 0 is equivalent to m == 0.
  - If n <= 0 the function should return an empty container.
  - If there isn't enough candy to distribute, you should fill the corresponding 
  number with 0.

  Input
  - m: Integer (m <= 100000)
  - n: Integer (n <= 1000)

  Output
  [Integer]
*/

// m = how many candies there are, n = how many children there are
function distribute(m, n) {
  // Return empty container since n <= 0.
  if(n <= 0)
    return [];

  // Return a container of 0's of n length since there aren't any candies to
  // give out.
  if(m <= 0)
    return new Array(n).fill(0);

  // Essentially giving 1 candy to each child until no candy's left.
  let candyDistribution = new Array(n).fill(0);
  let candiesLeft = m;
  while(candiesLeft > 0) {
    for(let i = 0; i < n; i++) {
      if(candiesLeft <= 0)
        break;
      else {
        candyDistribution[i]+=1;
        candiesLeft-=1;
      }
    }
  }

  return candyDistribution;
}