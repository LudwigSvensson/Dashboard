    const apiKey = "6a84d81c1cafca78b2aa9364ae41bd60";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input")
    const searchBtn = document.querySelector(".search button")
    const weatherIcon =document.getElementById('weather-icon')

async function checkWeather(city){

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.className="bi bi-cloud";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.className="bi bi-brightness-high";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.className="bi bi-cloud-rain";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.className="bi bi-cloud-drizzle";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.className="bi bi-cloud-haze";
  }
  else if(data.weather[0].main == "Thunderstorm"){
    weatherIcon.className="bi bi-cloud-lightning";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.className="bi bi-cloud-snow";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
