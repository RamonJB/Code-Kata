// 03/12/19

/*
  6 Kyu
  Problem provided by https://www.codewars.com/kata/checkered-board
*/

function checkeredBoard(dimension) {
  // dimension has to be an integer greater than 2.
  if(dimension < 2 || !Number.isInteger(dimension))
    return false;

  let board = "";
  let startingSquare, alternatingSquare;
  let changeRow = false;

  if(dimension % 2 == 0) {
    startingSquare = "□";
    alternatingSquare = "■";
  }

  else {
    startingSquare = "■";
    alternatingSquare = "□";
  }

  for(let i = 0; i < dimension; i++) {
    for(let j = 0; j < dimension; j++) {
      if(!changeRow) {
        if(j % 2 == 0)
          board+=startingSquare;
        else board+=alternatingSquare;
        
        if(j != dimension - 1)
          board+=" ";
      }

      else {
        if(j % 2 == 0)
          board+=alternatingSquare;
        else board+=startingSquare;
        if(j != dimension - 1)
          board+=" ";
      }
    }
    if(!changeRow)
      changeRow = true;
    else changeRow = false;
    if(i != dimension - 1)
      board+="\n";
  }

  return board;
}
