// variables for apis

let cocktailByNameApi =
  "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

let drinkNames;
let drinkData;

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    drinkData = data.drinks;
    drinkNames = data.drinks[1].strDrink;
    console.log(data);
    console.log(drinkNames);
    console.log(drinkData);
    logDrinks(data);
  });

function logDrinks(data) {
  for (let i = 0; i < 6; i++) {
    console.log(data.drinks[i]);
  }
}

let userSearchInput = prompt("type in drink name");
let searchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userSearchInput;
console.log(searchUrl);

fetch(searchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < 6; i++) {
      console.log(data.drinks[i].strDrink);
    }
  });
