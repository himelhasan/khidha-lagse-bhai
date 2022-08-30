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
    //   , strMeal, strCategory, strArea, strMealThumb, strInstructions
    console.log(meal.strMeal);

    const div = document.createElement("div");
    div.innerHTML = `
    <a href="#asdf">
      <div onclick="recipeDetails(${meal.idMeal})" class="card w-auto bg-base-100 shadow-xl h-full" >
  <figure><img src=${meal.strMealThumb} alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">${meal.strMeal}</h2>
        <div class="badge">${meal.strCategory}</div>
        <p class="truncate">${meal.strInstructions}</p>
        
        
      </div>
    </div>
    </a>
 `;
    recipeContainer.appendChild(div);
  });
};

const recipeDetails = (idMeal) => {
  // console.log(idMeal);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => showMealDetails(data.meals[0]));
};

const showMealDetails = (url) => {
  const recipeDetails = document.getElementById("recipe-details");
  recipeDetails.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-20 mx-5" id=#asdf> 
    <div class="card w-full bg-base-100 shadow-xl">
    <figure><img src=${url.strMealThumb} /></figure>
    <div class="card-body">
    <h2 class="card-title">${url.strMeal}<div class="badge badge-secondary">${url.strCategory}</div></h2>
    <div class="card-actions justify-end">
    <div class="badge badge-outline">${url.strIngredient1}</div> 
    <div class="badge badge-outline">${url.strIngredient2}</div> 
    <div class="badge badge-outline">${url.strIngredient3}</div> 
    <div class="badge badge-outline">${url.strIngredient4}</div> 
    <div class="badge badge-outline">${url.strIngredient5}</div> 
    <div class="badge badge-outline">${url.strIngredient6}</div> 
    <div class="badge badge-outline">${url.strIngredient7}</div> 
    <div class="badge badge-outline">${url.strIngredient8}</div> 
    <div class="badge badge-outline">${url.strIngredient9}</div> 
    <div class="badge badge-outline">${url.strIngredient10}</div> 
    <div class="badge badge-outline">${url.strIngredient11}</div> 
    <div class="badge badge-outline">${url.strIngredient12}</div> 
    <div class="badge badge-outline">${url.strIngredient13}</div> 
    <div class="badge badge-outline">${url.strIngredient14}</div> 
    <div class="badge badge-outline">${url.strIngredient15}</div> 
    <div class="badge badge-outline">${url.strIngredient16}</div> 
    <div class="badge badge-outline">${url.strIngredient17}</div> 
    <div class="badge badge-outline">${url.strIngredient18}</div> 
    <div class="badge badge-outline">${url.strIngredient19}</div> 
    <div class="badge badge-outline">${url.strIngredient20}</div> 
    
  </div>
    <p>${url.strInstructions}</p>
   
  </div>
  </div>
`;
  recipeDetails.appendChild(div);
};

// search function
const serachInputData = () => {
  const input = document.getElementById("input-search");
  const inputdata = input.value;
  inputdata = loadMealData(inputdata);
  console.log(inputdata);
  input.value = "";
};

loadMealData("");
