// create object for storing functions and variables for using weather api
// need API key to access weather via onecall
// city paramater inside function means just have to tell it what city

let weather = {
    apiKey: "1304e430a55b09b2296e48b2c51a5161",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=standard&appid="
        + this.apiKey
        )

        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
            // Display weather on page-- data and variable info come from the 
            // api webpage with key inserted
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind
        console.log(name,icon,description,temp,humidity,speed);
        // display weather onactual html page
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
        "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mph";
    //    will remove dummy text on reload
        document.querySelector(".weather").classList.remove("loading");
        // below allows each search to pull a pic from the city chosen!
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

// make searchbar work via search function above
document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

// Below enables enter key to input city
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key =="Enter"){
        weather.search();
    }
});


// below allows txet to be hidden until info is input
weather.fetchWeather("denver")