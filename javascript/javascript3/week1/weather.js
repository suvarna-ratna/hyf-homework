const input = document.getElementById("city_name");
const button = document.getElementById("btn");
const msg = document.getElementById("errorMsg");

const locationCity = document.getElementById("location");
const weatherIcon = document.getElementById("weather_icon");
const temp = document.getElementById("temperature");
const description = document.getElementById("desc");
const wind = document.getElementById("wind_speed");
const high = document.getElementById("max_temp");
const Low = document.getElementById("min_temp");
const humidity = document.getElementById("humidity");
const clouds = document.getElementById("clouds");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

function clearValues() {
  locationCity.innerHTML = "";
  weatherIcon.innerHTML = "";
  temp.innerHTML = "";
  description.innerHTML = "";
  wind.innerHTML = "";
  high.innerHTML = "";
  Low.innerHTML = "";
  humidity.innerHTML = "";
  clouds.innerHTML = "";
  sunrise.innerHTML = "";
  sunset.innerHTML = "";
  document.getElementById("map").innerHTML = "";
}
button.addEventListener("click", () => {
  if (input.value) {
    const cityName = input.value.toLowerCase();
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=0f63744b902e0d68602757b92a1d00e6";
    fetch(url)
      .then((response) => response.json())
      //.then(data=>console.log(data))
      .then((data) => renderCityWeatherInfo(data));
  } else {
    msg.innerHTML = "Please enter the city";
    return false;
  }
});

function renderCityWeatherInfo(data) {
  clearValues();
  msg.innerHTML = " ";
  input.value = "";

  locationCity.innerHTML = data.name
    ? data.name
    : "Please provide existed city.. Entered City not Exist";

  weatherIcon.src =
    "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  temp.innerHTML = Math.floor(data.main.temp - 273) + "&#176" + "C";

  description.innerHTML = data.weather[0].description;

  wind.innerHTML = "Wind speed: " + data.wind.speed + " m/s";

  high.innerHTML =
    "High: " + Math.floor(data.main.temp_max - 273) + "&#176" + "C";

  Low.innerHTML =
    "Low: " + Math.floor(data.main.temp_min - 273) + "&#176" + "C";

  humidity.innerHTML = "Humidity: " + data.main.humidity + "%";

  clouds.innerHTML = "Clouds: " + data.clouds.all + "%";

  sunrise.innerHTML =
    "Sunrise:" + new Date(data.sys.sunrise * 1000).toLocaleTimeString();

  sunset.innerHTML =
    "Sunset:" + new Date(data.sys.sunset * 1000).toLocaleTimeString();

  //Map showing where the city is located
  const lat = data.coord.lat;
  const lng = data.coord.lon;
  //console.log(lat)
  //console.log(lng)
  function initMap(lat, lng) {
    const coords = new google.maps.LatLng(lat, lng);
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: coords,
    });
  }
  initMap(lat, lng);
  document.querySelector("#display_data").style.visibility = "visible";
  document.getElementById(
    "map"
  ).innerHTML = `<div style="width: 100%"><iframe width="650" height="500" src="https://maps.google.com/maps?q=${data.name}&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>`;
}

//Getting current position(optional)
const btn2 = document.querySelector("#geoLoc");

btn2.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(myPosition);
  } else {
    alert = "browser doesn't support";
  }
});

function myPosition(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  getWeather(lat, long);
}

function getWeather(lat, long) {
  const api =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    long +
    "&appid=0f63744b902e0d68602757b92a1d00e6";
  //console.log (api);
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      data.name; //output's only  current position location name
      //Rendering current position weather
      url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        data.name +
        "&appid=0f63744b902e0d68602757b92a1d00e6";
      fetch(url)
        .then((response) => response.json())
        //.then(data=>console.log(data))
        .then((response) => renderCityWeatherInfo(response));
    });
}

navigator.geolocation.getCurrentPosition(
  function (position) {
    localStorage.setItem("lat", position.coords.latitude);
    localStorage.setItem("long", position.coords.longitude);
  },
  function (error) {
    console.log(error);
  }
);

function myPositionFromLocal() {
  const latL = localStorage.lat;
  const longL = localStorage.long;
  getWeather(latL, longL);
}
