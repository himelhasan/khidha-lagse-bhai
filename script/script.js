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
  
  <div class="grid grid-cols-1 gap-10 mb-20 mx-5" id=#asdf> 
    <div class="card w-full lg:card-side bg-base-100 shadow-xl">
    <figure class="!items-start	"><img src=${url.strMealThumb} /></figure>
    <div class="card-body">
    <h2 class="card-title">${url.strMeal}<div class="badge badge-secondary">${url.strCategory}</div></h2>
    <div class="card-actions justify-end">

    


    
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th>Ingredient</th>
        <th>Measure</th>
      </tr>
    </thead>
    <tbody>
      <tr>     
        <td>${url.strIngredient1}</td>
        <td>${url.strMeasure1}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient2}</td>
        <td>${url.strMeasuret2}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient3}</td>
        <td>${url.strMeasure3}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient4}</td>
        <td>${url.strMeasure4}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient5}</td>
        <td>${url.strMeasure5}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient6}</td>
        <td>${url.strMeasure6}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient7}</td>
        <td>${url.strMeasure7}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient8}</td>
        <td>${url.strMeasure8}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient9}</td>
        <td>${url.strMeasure9}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient10}</td>
        <td>${url.strMeasure10}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient11}</td>
        <td>${url.strMeasure11}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient12}</td>
        <td>${url.strMeasure12}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient13}</td>
        <td>${url.strMeasure13}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient14}</td>
        <td>${url.strMeasure14}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient15}</td>
        <td>${url.strMeasure15}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient16}</td>
        <td>${url.strMeasure16}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient17}</td>
        <td>${url.strMeasure17}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient18}</td>
        <td>${url.strMeasure18}</td>
      </tr>
      <tr>     
        <td>${url.strIngredient19}</td>
        <td>${url.strMeasure19}</td>
      </tr>
     
     
    </tbody>
  </table>



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
