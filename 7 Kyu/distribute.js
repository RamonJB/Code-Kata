// 02/29/18

/*
  7 Kyu
  Problem provided by https://www.codewars.com/kata/distributing-candies-fairly
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
