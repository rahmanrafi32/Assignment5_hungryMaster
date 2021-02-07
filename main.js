document.getElementById('submitButton').addEventListener('click', function () {
    const foodName = document.getElementById('searchFood').value;

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + foodName)
        .then(res => res.json())
        .then(data => {
            const mealName = data.meals[0].strMeal;
            const mealThumb = data.meals[0].strMealThumb;
            const foodDiv = document.getElementById('foods');
            foodDiv.innerHTML = `
                    <img src="${mealThumb}">
                    <h3>${mealName}</h3>
                `
        });



})

function details() {
    console.log("details has been shown");
}