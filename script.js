//display function re-renders the HTML to display the appropriate content
// function displayWeatherData() {

//create API key

var queryURL =
  // Creating an AJAX call for the specific city's weather when serached
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });

// Creating a div to hold the Weather
// var movieDiv = $("<div class='movie'>");

// var temp = response.Temperatue;

// Creating an element to have the temperatue displayed

//Use `localStorage` to store any persistent data
