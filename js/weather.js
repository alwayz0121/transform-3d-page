//날씨 API를 이용해 날씨 구현하기
const API_KEY = "dfa67fce476dcdd1d34f28afe27278f9";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather-now h2");
      city.innerText = data.name;
      const detail_now = document.querySelector(".weather-now h3");
      detail_now.innerHTML = data.list[2].weather[0].description;
      const time_now = document.querySelector(".weather-now h5");
      time_now.innerHTML = data.list[2].dt_txt;
      const temp_now = document.querySelector(".weather-now h4");
      temp_now.innerHTML = data.list[2].main.temp;

      const weather_after3h = document.querySelectorAll(".weather-after h3")[0];
      weather_after3h.innerHTML = data.list[3].weather[0].main;
      const weatherDetail_after3h =
        document.querySelectorAll(".weather-after h4")[0];
      weatherDetail_after3h.innerHTML = data.list[3].weather[0].description;
      const time_after3h = document.querySelectorAll(".weather-after p")[0];
      time_after3h.innerHTML = data.list[3].dt_txt;
      const temp_after3h = document.querySelectorAll(".weather-after h4")[1];
      temp_after3h.innerHTML = data.list[3].main.temp;

      const weather_after6h = document.querySelectorAll(".weather-after h3")[1];
      weather_after6h.innerHTML = data.list[4].weather[0].main;
      const weatherDetail_after6h =
        document.querySelectorAll(".weather-after h4")[2];
      weatherDetail_after6h.innerHTML = data.list[4].weather[0].description;
      const time_after6h = document.querySelectorAll(".weather-after p")[1];
      time_after6h.innerHTML = data.list[4].dt_txt;
      const temp_after6h = document.querySelectorAll(".weather-after h4")[3];
      temp_after6h.innerHTML = data.list[4].main.temp;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
