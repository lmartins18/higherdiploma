import { useContext, useEffect, useState } from 'react';
import { WeatherComponent } from './WeatherComponent';
import { WeatherContext } from './contexts/WeatherContext';
import { getLocation } from '../../helpers/geolocation';

export const Weather = () => {
    const [city, setCity] = useState();
    const [error, setError] = useState();
    const { weather, loading, dateState, getWeather } = useContext(WeatherContext);

    const getWeatherWithCity = () => {
        // Clear error.
        setError("")
        // Fetch
        getWeather(city)
            .catch(error => setError(error.message))
    }

    useEffect(() => {
        getLocation()
            .then(res => getWeather(res))
            .catch(error => setError(error.message))
    }, [])


    return (
        <>
            <div id="weather-search-container">
                <input type="text" placeholder='Dublin, IE' name="country" id="country-input"
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && getWeatherWithCity()}
                />
                <button onClick={getWeatherWithCity} >Get Weather</button>
            </div>
            <div id="weather-container">
                {error
                    ? <h2 id="error-message">Error: {error}</h2>
                    : <WeatherComponent
                        weather={weather}
                        error={error}
                        loading={loading}
                        dateState={dateState}
                    />
                }
            </div>
        </>
    );
}