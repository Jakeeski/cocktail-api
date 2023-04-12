// variables for apis

let cocktailByNameApi =
  "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

let cocktailRandom = "www.thecocktaildb.com/api/json/v1/1/random.php";

async function logJSONData() {
  const response = await fetch(
    "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );
  const jsonData = await response.json();
  console.log(jsonData);
}
adadadafaf;
