let weather = {
    "apiKey": "858688eca31355a69fbb43d48c885e20",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
        fetch("https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=" {this.apiKey})
        .then((response) => response.json()) //the promise to return data
        .then((data) => this.displayWeather(data)); //log data to console for user to see

    },
    displayWeather: function(data, weather) { //assign particular pieces from object
        const { name } = data;
        const{ icon, description } = data.weather[0];
        const {temp, humidity } = data.main;
        const { speed } = data.wind;
        const { city } = data.city;
        console.log(name, icon, description, temp, humidity, speed, city);
        
        var d = document.getElementByClassName("temp");
        var n = parseFloat(d);
        document.querySelector(".city").innerText = "Todays weather in: " + name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText= description;
        document.querySelector(".temp").innerText= n*9 / 5+32.5;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText="Wind speed: " + speed + "km/hr";
        document.querySelector(".detailsOfInfo").innerText= "Details: " + city;
        document.querySelector(".weather").classList.remove("loading");
 },
        search: function (){
            this.fetchWeather(document.querySelector(".searchbar").value);
        },
};
document.querySelector(".searcher"),addEventListener("click", function() {
    weather.search();
    
});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter")
    weather.search();
});
weather.fetchWeather()
