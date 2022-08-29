console.log(
  "%c last follower found 4196",
  "color:white; padding:5px; background: green;"
);

// api load

const loadMealData = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((response) => response.json())
    .then((meal) => showMealData(meal.meals));
};

const showMealData = (meals) => {
  const recipeContainer = document.getElementById("recipe-container");
  recipeContainer.innerHTML = "";
  meals.forEach((meal) => {
    //   idMeal, strMeal, strCategory, strArea, strMealThumb, strInstructions
    console.log(meal.strMeal);

    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card w-auto bg-base-100 shadow-xl h-full">
      <figure><img src=${meal.strMealThumb} alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">${meal.strMeal}</h2>
        <div class="badge">${meal.strCategory}</div>
        <p class="truncate">${meal.strInstructions}</p>
        
        
      </div>
    </div>
 `;
    recipeContainer.appendChild(div);
  });
};

const serachInputData = () => {
  const input = document.getElementById("input-search");
  const inputdata = input.value;
  inputdata = loadMealData(inputdata);
  console.log(inputdata);
  input.value = "";
};

loadMealData("");
