// 09/28/19

/*
  6 Kyu
  Problem provided by https://www.codewars.com/kata/who-likes-it/train
*/

function likes(names) {
  // Basing the statement off of the number of names in the names array.
  let numberOfNames = names.length;

  if(numberOfNames == 1) {
    return names[0] + " likes this";
  }

  else if(numberOfNames == 2) {
    return names[0] + " and " + names[1] + " like this";
  }

  else if(numberOfNames == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  }

  else if(numberOfNames > 3) {
    let remainingUsers = numberOfNames - 2;
    return names[0] + ", " + names[1] + " and " + remainingUsers + " others like this";
  }

  // Default return case if names array is empty.
  return "no one likes this";
}