function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '491f3225a07b43c77be98c3c1b91f338'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
                            <h2>Weather in ${data.name}</h2>
                            <p>Temperature: ${data.main.temp} &#8451;</p>
                            <p>Weather: ${data.weather[0].description}</p>`;
})
.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });

}

function showWeatherByCoordinates(event) {
    event.preventDefault();

    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = '491f3225a07b43c77be98c3c1b91f338';

    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');

            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Latitude: ${data.coord.lat}</p>
                <p>Longitude: ${data.coord.lon}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);

            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML =
                `<p>Failed to fetch weather. Please check the coordinates and try again.</p>`;
        });
}


document
    .getElementById('weatherForm')
    .addEventListener('submit', showweatherDetails);

document
    .getElementById('coordinatesForm')
    .addEventListener('submit', showWeatherByCoordinates);