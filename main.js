document.getElementById("search-btn").addEventListener("click", getMealList);
const mealList = document.getElementById("meal");

// get meal list
function getMealList() {
  const gettingFoodName = document.getElementById("search-input").value;
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${gettingFoodName}`
  )
    .then((res) => res.json())
    .then((data) => {
      let foodList = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          foodList += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                `;
        });
        mealList.classList.remove("notFound");
      } else {
        foodList = "Sorry, we didn't find your food";
        mealList.classList.add("notFound");
      }
      mealList.innerHTML = foodList;
    });
}
