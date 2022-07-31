//날씨 API를 이용해 날씨 구현하기
const API_KEY = "dfa67fce476dcdd1d34f28afe27278f9";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather-now h2");
      city.innerText = data.name;
      const weather_now = document.querySelector(".weather-now h3");
      weather_now.innerHTML = data.weather[0].main;
      const detail_now = document.querySelector(".weather-now h5");
      detail_now.innerHTML = data.weather[0].description;
      const temp_now = document.querySelector(".weather-now h4");
      temp_now.innerHTML = data.main.temp;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
