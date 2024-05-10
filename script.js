let weather = {
    "apiKey": "858688eca31355a69fbb43d48c885e20",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
        .then((response) => response.json()) //the promise to return data
        .then((data) => this.displayWeather(data)); //log data to console for user to see

    },
    
    displayWeather: function(data) { //assign particular pieces from object
        const { name } = data;
        const{ icon, description } = data.weather[0];
        const {temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(name, icon, description, temp, humidity, speed);
     
        document.querySelector(".city").innerText = "Todays weather in: " + name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText= description;
        document.querySelector(".temp").innerText= temp*9 / 5 + 32.5;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText="Wind speed: " + speed + "km/hr";
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".listWeather").innerText = speed + " this is a test";
        
     },
        search: function (){
            this.fetchWeather(document.querySelector(".searchbar").value);
        },
};

let weeklyWeather = {
    "apiKey": "858688eca31355a69fbb43d48c885e20",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=" + this.apiKey)
        then.((data) => this.displayWeeklyWeather(data));

        
    },
    displayWeeklyWeather: function(data) {
        const { temp } = data.main;
        alert("hey");

        document.querySelector(".listWeather").innerText = temp;
    },
        search: function() {
            this.fetchWeather(document.querySelector(".weeklysearch").value);
        },
}

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter")
    weather.search();
});
weather.fetchWeather()
