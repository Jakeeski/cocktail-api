// variables for apis

/* let cocktailByNameApi =
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
      console.log(data.drinks[i].strDrinkThumb);
    }
  });
 */

// getApi for main display
async function getApi(URL) {
  try {
    const response = await fetch(URL);
    display(response);

    if (!response.ok) {
      throw new Error(
        `Failed to retrieve data: ${response.status} ${response.statusText}`
      );
    }
    drinkData = await response.json();
    display(drinkData);
    drinkObjectDisplay(drinkData);
    drinkNamesDisplay(drinkData);
    drinkThumbDisplay(drinkData);
    cardDisplay();
    //
  } catch (error) {
    console.error(error);
  }
}

getApi("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");

// Simple display arrow functions
let display = (x) => {
  console.log(x);
};

let drinkObjectDisplay = (x) => {
  for (let i = 0; i < 3; i++) {
    console.log(x.drinks[i]);
  }
};

let drinkNamesDisplay = (x) => {
  for (let i = 0; i < 3; i++) {
    console.log(x.drinks[i].strDrink);
  }
};

let drinkThumbDisplay = (x) => {
  for (let i = 0; i < 3; i++) {
    console.log(x.drinks[i].strDrinkThumb);
  }
};

// create drink cards on html
function cardDisplay() {
  for (let i = 25; i < 31; i++) {
    //
    let cardDiv = $("<div>");
    cardDiv.attr("card", "card");
    cardDiv.attr("style", "width: 300px;");

    let cardHeaderDiv = $("<div>");
    cardHeaderDiv
      .addClass("card-header")
      .text(`${drinkData.drinks[i].strDrink}`);

    let cardBodyDiv = $("<div>");
    cardBodyDiv.addClass("card-body");

    let cardImgDiv = $("<img>");
    cardImgDiv
      .addClass("card-img-bottom")
      .attr("src", `${drinkData.drinks[i].strDrinkThumb}`);

    cardBodyDiv.append(cardImgDiv);
    cardDiv.append(cardHeaderDiv).append(cardBodyDiv).append(cardBodyDiv);

    $("#cardContainer").append(cardDiv);
  }
}
