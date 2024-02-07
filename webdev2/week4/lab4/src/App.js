import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import spinner from './img/spinner.svg'

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [dateState, setDateState] = useState("");

  useEffect(() => {
    if (weather) {
      // Get local time for location.
      const currentDate = new Date();
      currentDate.setSeconds(weather.timezone + currentDate.getSeconds());
      setDateState(currentDate)
    }
  }, [weather]);

  const clearState = () => {
    setError("");
    setLoading(true);
    setWeather("");
  }
  // Fetch Data
  const getWeather = async () => {
    if (city) {
      // Clear state
      clearState();
      // Fetch
      await axios(`http://api.openweathermap.org/data/2.5/weather?mode=json&q=${city}&appid=b67ac1d7920c598f8cc90c0a230a88d5&units=metric`)
        .then((resp) => {
          console.log(resp.data);
          setWeather(resp.data);
        })
        .catch((error) => setError(error.response.data.message))
        .finally(() => setLoading(false));
    }
  };
  // Other methods
  // REFERENCE: https://dev.to/jorik/country-code-to-flag-emoji-a21
  function getFlagEmoji(countryCode) {
    if (countryCode) {
      const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
      return String.fromCodePoint(...codePoints);
    }
  }
  // Components
  const WeatherComponent = () => (
    <div id="weather-container">
      {error && <h2 id="error-message">Error: {error}</h2>}
      {loading ? (
        <img src={spinner} alt="loading icon" id="spinner" />
      ) : (
        weather && (
          <div id="weather-details-container">
            <h1>Current Condition</h1>
            <h2>{dateState.toUTCString()}</h2>
            <img
              src={weather.weather[0].icon ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` : ""}
              alt={`Weather Icon`}
              id="weather-icon"
            />
            <h2 id="location">{weather.name}, {weather.sys.country} <span id="country-flag">{getFlagEmoji(weather.sys.country)}</span></h2>
            <h1>{weather.main.temp}&#8451;</h1>
            <h2>{weather.weather[0].main} - {weather.weather[0].description}</h2>
            <ul id="weather-details-list">
              <li>Feels like: {weather.main.feels_like}&#8451;</li>
              <li>Max: {weather.main.temp_max}&#8451;</li>
              <li>Min: {weather.main.temp_min}&#8451;</li>
              <li>Humidity: {weather.main.humidity}%</li>
            </ul>
          </div>
        )
      )}
    </div>

  );

  return (
    <div className="App">
      <div id="main-container">
        <div id="weather-search-container">
          <input type="text" placeholder='Dublin, IE' name="country" id="country-input" onChange={(e) => setCity(e.target.value)} onKeyDown={(e) => e.key === "Enter" && getWeather()} />
          <button onClick={getWeather} >Get Weather</button>
        </div>
        <WeatherComponent />
      </div>
    </div>
  );
}

export default App;
