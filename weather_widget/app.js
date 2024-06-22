let lon;
let lat;

function setup() {
    if (navigator.geolocation) {
        console.log("Location Available");
        navigator.geolocation.getCurrentPosition(position);
    } else {
        console.log("Location Not Available");
        let name = document.getElementById('cityName').innerHTML = "LOCATION IS NOT AVAILABLE IN YOUR BROWSER";
    }
}

function position(pos) {
    lon = pos.coords.longitude;
    lat = pos.coords.latitude;
    loadJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6a8864f2fdcd48568bf8b4a9330cf63b`, getData);
}

function getData(data) {

    const icon_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    const cityName = data.name;
    const temperature = parseInt(data.main.temp - 273.15);
    const humidity = data.main.humidity;
    const weatherDescription = data.weather[0].description;
    document.getElementById('weather_icon').innerHTML = `<img src="${icon_url}" alt="${weatherDescription}">`
    document.getElementById('cityName').innerHTML = cityName;
    document.getElementById('temp').innerHTML = `${temperature}°`;
    document.getElementById('hum').innerHTML = `${humidity}% Humidity`;
    document.getElementById('des').innerHTML = weatherDescription;
}