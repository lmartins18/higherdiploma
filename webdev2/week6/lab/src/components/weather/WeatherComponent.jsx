import spinner from './../../img/spinner.svg';
import getFlagEmoji from '../../helpers/getFlagEmoji';

export const WeatherComponent = ({ weather, loading, dateState }) => (
    <>
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
                    <h2 id="location">
                        {weather.name}, {weather.sys.country} <span id="country-flag">{getFlagEmoji(weather.sys.country)}</span>
                    </h2>
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
    </>
);
