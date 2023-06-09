let API = "http://api.openweathermap.org/data/2.5/weather?q=";
let appID = "&appid=b067377a72c98ae6963cdae2e35408d9";

const element = document.getElementById("element");
const temp = document.getElementById("temp");

const button = document.getElementById("btn");
button.addEventListener("click", function () {
  const city = document.getElementById("inp").value;
  getWeatherBycity(city);
});

async function getWeatherBycity(city) {
  const response = await fetch(API + city + appID);
  const weather = await response.json();
  const celsius = Math.floor(weather.main.feels_like - 273.15);

  temp.innerHTML = celsius;
}
