// 02/28/19

/*
  8 Kyu
  Problem provided by https://www.codewars.com/kata/5bb904724c47249b10000131
*/

function points(games) {
  let totalPoints;

  for(let i = 0; i < games.length; i++) {
    let x = games[i][0];
    let y = games[i][2];

    if(x > y)
      totalPoints+=3;
    else if(x == y)
      totalPoints+=1;
  }

  return totalPoints;
}
