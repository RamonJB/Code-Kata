// 03/02/19

/*
  8 Kyu
  Problem provided by https://www.codewars.com/kata/whats-up-next
*/

function nextItem(xs, item) {
  let foundState = false;

  // foundState will be false until the item is seen. When that happens, we 
  // iterate one more time then return the item after.
  for(let x of xs) {
    if(foundState)
      return x;

    if(x == item)
      foundState = true;
  }

  return undefined;
}
