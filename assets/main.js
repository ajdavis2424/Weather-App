// create object for storing functions and variables for using weather api
// need API key to access weather via onecall

let weather = {
    apiKey: "1304e430a55b09b2296e48b2c51a5161",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
        + city 
        + "&appid="
        + appKey
        )

        .then((response) => response.json())
        .then((data) =>console.log(data));
    },
            // Display weather on page
    displayWeather: function(data){
        
    }
};