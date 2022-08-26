let cityInput = document.querySelector('.city');
let searchBtn = document.querySelector('.search');
let resultContainer = document.querySelector('.resultContainer');
let cityName = document.querySelector('.cityName');
let currentTemp = document.querySelector('.currentTemp');

searchBtn.addEventListener('click',()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=04b02cc47e88a054c274e596f6d1bc99`)
.then(response=>response.json())
.then(data=>{
    cityName.innerText = (`City Name is ${data['name']}`);
    currentTemp.innerText = (`The current temperature is ${Math.floor(data['main']['temp']-273.15)}°C`)
})
.catch(err =>{
    console.warn(`Invalid city name entered. Please enter correct city name.`);
    alert(`Invalid city name entered. Please enter correct city name.`)
})
})