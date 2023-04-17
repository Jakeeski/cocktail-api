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
    // display(drinkData);
    // drinkObjectDisplay(drinkData);
    // drinkNamesDisplay(drinkData);
    // drinkThumbDisplay(drinkData);
    // cardDisplay(drinkData);
    alcoholicDrinks();
    nonAlcoholicDrinks();
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
function cardDisplay(drinkData) {
  console.log(drinkData.drinks.length);
  for (let i = 18; i < 25; i++) {
    // i=0;i<drinkData.length;i++;
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
    let modalId = "modal" + i;
    let modalClass = `<div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle${i}"></h5>
            
          
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
    let modalButton = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${modalId}">
 Show Detail
 </button>`;
    cardDiv.append(modalClass).append(modalButton);

    console.log(cardDiv);
    $("#cardContainer").append(cardDiv);
    $("#modalTitle" + i).text(`${drinkData.drinks[i].strDrink}`);
  }
}

function alcoholicDrinks() {
  for (let i = 18; i < 26; i++) {
    let cardDiv = $("<div>");
    cardDiv.attr("class", "card");
    cardDiv.attr("style", "width: 18rem;");

    let cardImgDiv = $("<img>");
    cardImgDiv
      .addClass("card-img-top")
      .attr("src", `${drinkData.drinks[i].strDrinkThumb}`);

    // cardHeaderDiv
    let cardBody = $("<div>");
    cardBody.addClass("card-body");

    let cardText = $("<p>");
    cardText.text(`${drinkData.drinks[i].strDrink}`);

    let cardBodyDiv = $("<div>");
    cardBodyDiv.addClass("card-body");

    $("#alcoholic-drinks").append(cardDiv);
    $(cardDiv).append(cardImgDiv).append(cardBody);
    $(cardBody).append(cardText);

    let modalId = "modal" + i;
    let modalClass = `<div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle${i}"></h5>
            
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
    let modalButton = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${modalId}">
 Show Detail
 </button>`;

    cardDiv.append(modalClass).append(modalButton);
    $("#modalTitle" + i).text(`${drinkData.drinks[i].strDrink}`);
  }
}

function nonAlcoholicDrinks() {
  for (let i = 18; i < 22; i++) {
    let cardDiv = $("<div>");
    cardDiv.attr("class", "card");
    cardDiv.attr("style", "width: 18rem;");

    let cardImgDiv = $("<img>");
    cardImgDiv
      .addClass("card-img-top")
      .attr("src", `${drinkData.drinks[i].strDrinkThumb}`);

    // cardHeaderDiv
    let cardBody = $("<div>");
    cardBody.addClass("card-body");

    let cardText = $("<p>");
    cardText.text(`${drinkData.drinks[i].strDrink}`);

    let cardBodyDiv = $("<div>");
    cardBodyDiv.addClass("card-body");

    $("#non-alcoholic-drinks").append(cardDiv);
    $(cardDiv).append(cardImgDiv).append(cardBody);
    $(cardBody).append(cardText);

    let modalId = "modal" + i;
    let modalClass = `<div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle${i}"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`;
    let modalButton = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${modalId}">
 Show Detail
 </button>`;

    cardDiv.append(modalClass).append(modalButton);
    $("#modalTitle" + i).text(`${drinkData.drinks[i].strDrink}`);
  }
}

async function randomApi() {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    display(response);

    if (!response.ok) {
      throw new Error(
        `Failed to retrieve data: ${response.status} ${response.statusText}`
      );
    }
    ranDrinkData = await response.json();
    console.log(ranDrinkData);
    console.log(ranDrinkData.drinks[0].strDrink);
    console.log(ranDrinkData.drinks[0].strDrinkThumb);
    randomDrink();
  } catch (error) {
    console.error(error);
  }
}

$("#GenerateBtn").click(randomApi);

function randomDrink() {
  if (`${randomDrink}.child()`) {
    $("#ranCard").remove();
  }

  let cardDiv = $("<div>");
  cardDiv.attr("class", "card");
  cardDiv.attr("style", "width: 18rem;");
  cardDiv.attr("id", "ranCard");

  let cardImgDiv = $("<img>");
  cardImgDiv
    .addClass("card-img-top")
    .attr("src", `${ranDrinkData.drinks[0].strDrinkThumb}`);

  // cardHeaderDiv
  let cardBody = $("<div>");
  cardBody.addClass("card-body");

  let cardText = $("<p>");
  cardText.text(`${ranDrinkData.drinks[0].strDrink}`);

  $("#randomDrink").append(cardDiv);
  $(cardDiv).append(cardImgDiv).append(cardBody);
  $(cardBody).append(cardText);

  let modalId = "modal" + "ranDrink";
  let modalClass = `<div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle1"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           
        </div>
        <div class="modal-body">
          <ul id="modalUL"></ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`;
  let modalButton = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${modalId}">
 Show Detail
 </button>`;

  cardDiv.append(modalClass).append(modalButton);
  $("#modalTitle1").text(`${ranDrinkData.drinks[0].strDrink}`);

  var ingredients = [];

  for (var i = 1; i < 15; i++) {
    ingredients.push(ranDrinkData.drinks[0]["strIngredient" + i]);
  }

  ingredients = ingredients.filter((ingredient) => ingredient !== null);
  for (let j = 0; j < ingredients.length; j++) {
    let modalitem = $("<li>");
    modalitem.text(`${ingredients[j]}`);
    $("#modalUL").append(modalitem);
  }
}

randomDrink();
