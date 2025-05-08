// const appid = "6a8864f2fdcd48568bf8b4a9330cf63b";

// get querystring
let lat = window.location.search.split("=")[1].split("&")[0];
let lon = window.location.search.split("=")[2];
let appid = window.location.search.split("=")[3];

function position() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`)
        .then(data => data.json())
        .then(data => showData(data))
}

function showData(data) {

    const icon_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    const cityName = data.name;
    const temperature = parseInt(data.main.temp - 273.15);
    const humidity = data.main.humidity;
    const weatherDescription = data.weather[0].description;
    document.getElementById('weather_icon').innerHTML = `<img src="${icon_url}" alt="${weatherDescription}">`
    document.getElementById('des').innerHTML = `${weatherDescription} in ${cityName}`;
    document.getElementById('temp').innerHTML = `${temperature}°`;
    document.getElementById('hum').innerHTML = `${humidity}% Humidity`;
}
