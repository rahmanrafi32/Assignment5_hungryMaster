document.getElementById('submitButton').addEventListener('click', function () {
    const foodName = document.getElementById('searchFood').value;

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + foodName)
        .then(res => res.json())
        .then(data => searchFood(data));

    const searchFood = foods => {
        const mealName = foods.meals[0].strMeal;
        const mealThumb = foods.meals[0].strMealThumb;
        const foodDiv = document.getElementById('foods');
        foodDiv.className = 'foodItem'
        foodDiv.innerHTML = `
            <img src="${mealThumb}">
            <h3>${mealName}</h3>
        `;
    }



})

function details() {
    console.log("details has been shown");
}