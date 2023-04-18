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
    console.log(drinkData);
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
        </div>
        <div class="modal-body">
          <ul id="modalUL"></ul>
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
async function searchApi(event) {
  event.preventDefault();
  console.log("searchApi");
  let searchInput = $(".searchBar").val();
  console.log(searchInput);
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchInput
    );
    display(response);

    if (!response.ok) {
      throw new Error(
        `Failed to retrieve data: ${response.status} ${response.statusText}`
      );
    }
    searchResults = await response.json();
    console.log(searchResults);
    console.log(searchResults.drinks[0].strDrink);
    console.log(searchResults.drinks[0].strDrinkThumb);
    searchDisplay();
  } catch (error) {
    console.log(error);
  }
}
function searchDisplay() {
  while ($("#search-drinks").children().length > 0) {
    console.log("TESTESTTEST");
    $("#search-drinks").empty();
  }
  for (let i = 0; i < 6; i++) {
    let cardDiv = $("<div>");
    cardDiv.attr("class", "card");
    cardDiv.attr("style", "width: 18rem;");

    let cardImgDiv = $("<img>");
    cardImgDiv
      .addClass("card-img-top")
      .attr("src", `${searchResults.drinks[i].strDrinkThumb}`);

    // cardHeaderDiv
    let cardBody = $("<div>");
    cardBody.addClass("card-body");

    let cardText = $("<p>");
    cardText.text(`${searchResults.drinks[i].strDrink}`);

    let cardBodyDiv = $("<div>");
    cardBodyDiv.addClass("card-body");

    $("#search-drinks").append(cardDiv);
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
    $("#modalTitle" + i).text(`${searchResults.drinks[i].strDrink}`);
  }
}

$("#searchBtn").click(searchApi);
