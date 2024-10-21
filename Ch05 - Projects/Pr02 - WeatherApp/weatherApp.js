//Async and await

const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const weatherField = document.querySelector(".weather_condition span");
const emojiField = document.querySelector(".weather_condition img");
const form = document.querySelector("form");
const searchField = document.querySelector(".searchField");

let target = "";

form.addEventListener('submit' , search); 

function search(e) {
    //"preventDefault" --> it helps to stop the page from reloading and other default behaviour
    e.preventDefault();   //it will not let our form to refresh
    target = searchField.value;
    fetchData(target);
}

async function fetchData(target) {
    //`${target}`  --> This is called as Template Literal
    let endpoint = `http://api.weatherapi.com/v1/current.json?key=8c4ad3038354498994770125242109&q=${target}&aqi=no`;

    //"fetch" method expects an endpoint i.e for what end point we need to get the data
    const response = await fetch(endpoint);
    //".json()" is used to get the responseBody from the fetched data
    const data = await response.json();
    console.log(data);

    let currentTemp = data.current.temp_c;
    let locationName = data.location.name;
    let localTime = data.location.localtime;
    let currentCondition = data.current.condition.text;
    let conditionLogo = data.current.condition.icon;

    console.log(currentTemp);
    console.log(locationName);

    updateWeatherData(currentTemp , locationName , localTime , currentCondition , conditionLogo);
}

function updateWeatherData(temperature , cityName , time , currentCondition , currentLogo) {
    temperatureField.innerText = temperature;
    cityField.innerText = cityName;
    dateField.innerText = time;
    weatherField.innerText = currentCondition;
    emojiField.src = currentLogo;    
}

fetchData("Hyderabad");
