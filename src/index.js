function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let precipitaionElement = document.querySelector("#humidity");
  precipitaionElement.innerHTML = response.data.main;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);


  console.log(response.data);
}

let apiKey = "c358f38536c4808d14556c03c5e2d3e0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Trofa&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);