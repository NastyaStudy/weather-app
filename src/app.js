let currentDate = new Date();
let now = document.querySelector("#now-date");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[currentDate.getDay()];
let month = currentDate.getMonth();
month++;
let year = currentDate.getFullYear();
let date = currentDate.getDate();

function addZerro(current){
    if(current < 10){
        current = `0${current}`;
    }
    return current;
}


now.innerHTML = `${addZerro(date)}.${addZerro(month)}.${year}`;
let currentDay = document.querySelector("#day-of-week");
currentDay.innerHTML = day;
let currentTime = document.querySelector("#now-time");
let currentHour = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();


currentTime.innerHTML = `${currentHour}:${addZerro(currentMinutes)}`;




let form = document.querySelector("#city-selection");


function changeCity(event){
    event.preventDefault();
    let city = document.querySelector("#city");
    let inputCity = document.querySelector("#input-city");
    city.innerHTML = inputCity.value;
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&units=metric&appid=${apiKey}`;
axios.get(apiUrl).then(showTemperature);
axios.get(apiUrl).then(showFeelsLike);
axios.get(apiUrl).then(showHumidity);
axios.get(apiUrl).then(showWind);
axios.get(apiUrl).then(showCountry);
}
form.addEventListener("submit", changeCity);


// let metric = document.querySelector("#metric");
// let imperial = document.querySelector("#imperial");
// metric.addEventListener("click", toMetric);
// imperial.addEventListener("click", toImperial);


// let todayMetric = document.querySelector("#current-temperature");
// let metricTemperature = Number(todayMetric.innerHTML);

// function toImperial(event){
//     event.preventDefault();
//     let temperatureElement = document.querySelector("#current-temperature");
//     metric.classList.remove("active");
//     imperial.classList.add("active");
//     let imperialTemperature= (metricTemperature * 9) / 5 + 32;
//     temperatureElement.innerHTML= Math.round(imperialTemperature);
// }

// function toMetric(event){
//     event.preventDefault();
//     let temperatureElement=document.querySelector("#current-temperature");
//     metric.classList.add("active");
//     imperial.classList.remove("active");
//     temperatureElement.innerHTML= "17";
// }


let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
let city = "Vinnytsia";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


function showTemperature(response) {
        let currentTemperature = document.querySelector("#current-temperature");
          currentTemperature.innerHTML = `${Math.round(response.data.main.temp)}`;
        }

 axios.get(apiUrl).then(showTemperature);

 function showFeelsLike(response){
     let feelsLike= document.querySelector(".feels-like");
     feelsLike.innerHTML = `Feels like: ${Math.round(response.data.main.feels_like)}°C`;
 }

axios.get(apiUrl).then(showFeelsLike);

function showHumidity(response){
    let humidity= document.querySelector(".humidity");
     humidity.innerHTML = `Humidity: ${Math.round(response.data.main.humidity)}%`;
}

axios.get(apiUrl).then(showHumidity);

function showWind(response){
    let windy= document.querySelector(".windy");
     windy.innerHTML = `Wind: ${response.data.wind.speed} m/s`;
}

axios.get(apiUrl).then(showWind);


function showCountry(response){
    let country= document.querySelector(".country");
    city = document.querySelector(".current-city");
     country.innerHTML = response.data.sys.country;
      city.innerHTML = response.data.name;
}
axios.get(apiUrl).then(showCountry);




 let currentGeolocation = document.querySelector(".current-geolocation");
 currentGeolocation.addEventListener("click", getCurrentLocation);

 function handlePosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
       geolocationPosition();
  }

   function getCurrentLocation(event) {
  event.preventDefault();
   navigator.geolocation.getCurrentPosition(handlePosition);
}

 function geolocationPosition(){
axios.get(apiUrl).then(showTemperature);
axios.get(apiUrl).then(showFeelsLike);
axios.get(apiUrl).then(showHumidity);
axios.get(apiUrl).then(showWind);
axios.get(apiUrl).then(showCountry);
 }
  