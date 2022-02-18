// Fetch Weather

function getWeather(cityID) {
var key = 'd1a01be821e40e09a30424dc52cc2971';
fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
.then(function(resp) { return resp.json() }) // Convert data to json
.then(function(data) {
  extractWeather(data);
})
.catch(function(e) {
  console.log("Error: " + e);
});
}

// Update Weather Widget

function extractWeather( d ) {
  // Get Temperature
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var highTemp = Math.round(((parseFloat(d.main.temp_max)-273.15)*1.8)+32);
  var lowTemp = Math.round(((parseFloat(d.main.temp_min)-273.15)*1.8)+32);

	weatherWidget.temp.text(fahrenheit + "°");
  weatherWidget.hlTemp.text(highTemp + " ° / " + lowTemp + " °");
  // Get humidity

  weatherWidget.humidity.text("Humidity: " + d.main.humidity + "%");

  // Creating a condition wrapper
  var cWrap = $("<div>", {id:"cWrap"});
  cWrap.append(weatherWidget.city);
  cWrap.append(weatherWidget.condition);
  cWrap.append(weatherWidget.humidity);
  $("#weatherWidget").append(cWrap);

  // Creating a temperature wrapper
  var tWrap = $("<div>", {id:"tWrap"});
  tWrap.append(weatherWidget.temp);
  tWrap.append(weatherWidget.hlTemp);
  $("#weatherWidget").append(tWrap);
  // Set current city
  weatherWidget.city.text(d.name);

  // Get current conditions
  weatherWidget.condition.text(d.weather[0].main);

  // Change Icon according to temperature
  var cWeather = d.weather[0].main;
  var cType = d.weather[0].id;

  if(cWeather == "Clear"){
    weatherWidget.icon.attr("src", "assets/icons/weather/Sunny.png");
  }else if(cWeather == "Rain"){
    weatherWidget.icon.attr("src", "assets/icons/weather/Rainy.png");
  }else if(cWeather == "Clouds"){
    if(cType == 801 || cType == 802){
      weatherWidget.icon.attr("src", "assets/icons/weather/PartlyCloudy.png");
    }else{
      weatherWidget.icon.attr("src", "assets/icons/weather/Cloudy.png");
    }
  }else if(cWeather == "Thunderstorm"){
    weatherWidget.icon.attr("src", "assets/icons/weather/Thunder.png");
  }else if(cWeather == "Mist"){
    weatherWidget.icon.attr("src", "assets/icons/weather/Mist.png");
  }else if(cWeather == "Snow"){
    weatherWidget.icon.attr("src", "assets/icons/weather/Snow.png");
  }
  // Debug feature
  console.log(d.weather[0].main);
}
