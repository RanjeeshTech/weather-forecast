//Complete the Weather API Backend part using openweathermap api
const searchBox = document.querySelector('.search-box');
const cityName = document.querySelector(".city");
const date = document.querySelector(".date");
const weather = document.querySelector(".weather");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const temp = document.querySelector(".temp span");
const hiLow = document.querySelector(".hi-low");

const searchWeather = (e) => {
    const city = searchBox.value;
    if (searchBox.value == "") {
        cityName.innerHTML = "";
        weather.innerHTML = "";
        date.innerHTML = "";
        temp.innerHTML = "°c";
        hiLow.innerHTML = "°c / °c";
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=89727b6a56ab458faf4c1ee62b2cc6cb`)
        .then(res => {
            console.log(res.data);
            cityName.innerHTML = res.data.name + ", " + res.data.sys.country;
            weather.innerHTML = res.data.weather[0].main;
            date.innerHTML = days[new Date(Date.now()).getDay()] + " " + new Date(Date.now()).getDate() + " " + months[new Date(Date.now()).getMonth()] + " " + new Date(Date.now()).getFullYear();
            temp.innerHTML = res.data.main.temp + "°c";
            hiLow.innerHTML = res.data.main.temp_min + "°c / " + res.data.main.temp_max + "°c";
        })
        .catch(err => {
            return;
        });
}

searchBox.addEventListener("change", searchWeather);
searchBox.addEventListener("keyup", searchWeather);