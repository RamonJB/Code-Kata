// 03/02/19

/*
  6 Kyu
  Problem provided by https://www.codewars.com/kata/build-tower
*/

function towerBuilder(nFloors) {
  let tower = [];

  // Essentially building the tower from tower[nFloors - 1] to nFloors[0].
  let i = nFloors - 1;
  let numSpaces = 0;
  while(i >= 0) {
    tower[i] = "";

    // Adding in the spaces on one side.
    for(let j = 0; j < numSpaces; j++)
      tower[i]+=" ";
    
    // Adding in the stars in the middle.
    let numStars = 2 * i + 1;
    for(let k = 0; k < numStars; k++)
      tower[i]+="*";
    
    // Adding in the spaces on the other side.
    for(let l = 0; l < numSpaces; l++)
      tower[i]+=" ";
    
    // Move down the array by an index by decrementing.
    i--;
    
    // Each row requires one more space than the row before it so we increment.
    numSpaces++;
  }

  return tower;
}
