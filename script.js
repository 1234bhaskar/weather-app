const API_KEY = `25e736a68430aa9933fe857ba2105698`;
// import "dotenv/config";
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
// require("dotenv").config();
// const API_KEY = process.env.Secret_key;

const getWeather = async (city) => {
  weather.innerHTML = `<h3>Loading....</h3>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showdata(data);
};

const showdata = (data) => {
  console.log(data);
  if (data.cod == 404) {
    weather.innerHTML = `<h3 style="color:yellow;font:sans;">City Not Found<h3>`;
    return;
  }
  weather.innerHTML = ` 
<img class="image"  src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icons"> 
<div class="temp">
    <h3>${data.main.temp} ℃</h3>
    <h1>${data.weather[0].main}</h1>
</div>`;
};

form.addEventListener("submit", function (event) {
  console.log(getWeather(search.value));
  event.preventDefault();
});
