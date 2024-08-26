// pune
let lat = 22.558252;
let lon = 72.959945;

function position() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6a8864f2fdcd48568bf8b4a9330cf63b`)
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
