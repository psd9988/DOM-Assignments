let myInput = document.querySelector('.myInput')
let submitBtn = document.querySelector('.submitBtn')
let container = document.querySelector('.container')

console.log(myInput.value);

submitBtn.addEventListener('click', ()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${myInput.value}
    `)
    .then(response=>response.json())
    .then(data=>{
        let meals = data['meals'];

        for(let i = 0; i<10; i++){

            console.log(meals[i]);
            let mealThumb = `<img src="${meals[i]['strMealThumb']}" alt="image">`
            container.innerHTML += mealThumb
            container.innerHTML += `<br>`
            let title = meals[i]['strMeal']
            container.innerHTML += `<br>`
            let recipe = meals[i]['strInstructions']
            container.innerHTML += title
            container.innerHTML += `<br>`
            container.innerHTML += recipe
            container.innerHTML += `<br>`
            container.innerHTML += `<br>`
            container.innerHTML += `<br>`

            
        }
      
    })
    .catch(err =>{
        console.warn(`Invalid recipe searched`)
    })
    })