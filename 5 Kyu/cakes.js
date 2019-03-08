// 03/07/19

/*
  5 Kyu
  Problem provided by https://www.codewars.com/kata/pete-the-baker
*/

function cakes(recipe, available) {
  let numCakesPerIngredient = {}
  for(let ingredient in recipe) {
    // If we don't have this ingredient, we can't make any cakes.
    if(!available.hasOwnProperty(ingredient)) {
      return 0;
    }

    // We have the ingredient and find out how many cakes we can make from each
    // ingredient.
    let ingredientAmount = available[ingredient];
    while(ingredientAmount >= 0) {
      ingredientAmount-=recipe[ingredient];

      if(!numCakesPerIngredient.hasOwnProperty(ingredient))
        numCakesPerIngredient[ingredient] = 0;

      if(ingredientAmount >= 0)
        numCakesPerIngredient[ingredient]++;
    }
  }

  // Put the value of each key into an array and finding the min since the 
  // number of cakes that can be made depends on the ingredient we have the 
  // least of.
  let arr = Object.values(numCakesPerIngredient);
  let numCakes = Math.min(...arr);

  return numCakes;
}
