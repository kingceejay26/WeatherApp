async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';  // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();
        document.getElementById('error').style.display = 'none';
        document.getElementById('weather').style.display = 'block';
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `Wind: ${data.wind.speed} m/s`;
    } catch (error) {
        document.getElementById('weather').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    }
}