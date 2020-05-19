// Creating an AJAX call for the specific city's weather when serached

$(document).ready(function(){
    $('#cityInput').click(function(){
        var cityInput = $("#cityInput").val();
        if(city != ''){
           $.ajax({
               url:  "https://api.openweathermap.org/data/2.5/weather?q=" +
               cityInput + "&units=imperial" + "&APPID=12882752e4b2eaef1686774056c067d6",
               method: "GET",
             }).then(function (response) {
                   console.log(data);
               }}
            } 
        }
              )};   

    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var date = $("<h2>").text(response.date);
    var cityName = $("<h2>").text(response.cityName);
    var cityTemp = $("<p>").text(response.temperature);
    var humidity = $("<p>").text(response.humidity);
    var windSpeed = $("<p>").text(response.windSpeed);
    var uvIndex = $("<p>").text(response.uvIndex);



    $("#city-div").empty();
    $("#city-div").append(date,cityName, cityTemp,humidity,windSpeed,uvIndex
    );
    $("#display").append(cityName, cityTemp, windSpeed, humidity);




// queryParams.q = $("#cityInput").val().trim();

// THEN I am presented with current and future conditions for that city and that city is added to the search history


// var temp = response.temperatue[0].icon;


// Creating an element to have the temperatue displayed
//Use `localStorage` to store any persistent data
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast
