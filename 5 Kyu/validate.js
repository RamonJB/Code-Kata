// 03/04/19

/*
  5 Kyu
  Problem provided by https://www.codewars.com/kata/regex-password-validation
*/

function validate(password) {
  if(password.length < 6)
    return false;

  // The conditions the password must pass in order to be a valid password.
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;

  for(let i = 0; i < password.length; i++) {
    // Checking if the character at i is a non-alphanumeric character via ASCII.
    let asciiNum = password.charCodeAt(i);

    if(asciiNum < 48 || (asciiNum > 57 && asciiNum < 65) || (asciiNum > 90 && 
      asciiNum < 97) || asciiNum > 122)
      return false;

    let char = password.charAt(i);
    
    if(parseInt(char))
      hasNum = true;
      
    else if(char == char.toUpperCase())
      hasUpper = true;
      
    else if(char == char.toLowerCase())
      hasLower = true;      
  }

  return (hasUpper && hasLower && hasNum);
}
