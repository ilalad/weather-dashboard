$(document).ready(function () {
  $("#city-submit").click(function () {
    var cityInput = $("#cityInput").val();
    if (cityInput != "") {
      // Creating an AJAX call for the specific city's weather when serached

      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          cityInput +
          "&units=imperial" +
          "&APPID=12882752e4b2eaef1686774056c067d6",
        method: "GET",
      }).then(function (response) {
        console.log(response);
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        today = mm + "/" + dd + "/" + yyyy;
        $("#currentCity").text(response.name);
        $("#temp").text(response.main.temp);
        $("#humidity").text(response.main.humidity);
        $("#wind").text(response.wind.speed);
        $("#uv").text(response.uv);
      });
    }
  });
});

//         var cityArray = [
//           "Austin",
//           "Chicago",
//           "New York",
//           "Orlando",
//           "San Francisco",
//           "Seattle",
//           "Denver",
//           "Atlanta",
//         ];
//         rendercityArray();
//         function rendercityArray() {
//           cityArray.innerHTML = "";
//           cityArraySpan.textContent = cityArray.length;
//           var cityList = cityArray[i];

//           var li = document.createElement("li");
//           li.textContent = cityList;
//           cityList.append(li);
//         }

// // $("#currentCity").empty();
// // $("#currentCity").append(
// //   date,
// //   cityName,
// //   cityTemp,
// //   humidity,
// //   windSpeed,
// //   uvIndex
// // );
// $("#display").append(cityName, cityTemp, windSpeed, humidity);

// queryParams.q = $("#cityInput").val().trim();

// THEN I am presented with current and future conditions for that city and that city is added to the search history

// var temp = response.temperatue[0].icon;
