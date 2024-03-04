import axios from 'axios';
import { useState, useEffect } from 'react';

const useGetWeather = () => {
    const [weather, setWeather] = useState("");
    const [loading, setLoading] = useState(true);
    const [dateState, setDateState] = useState(new Date());

    // Get local time for location.
    useEffect(() => {
        if (weather) {
            const currentDate = new Date();
            currentDate.setSeconds(weather.timezone + currentDate.getSeconds());
            setDateState(currentDate)
        }
    }, [weather]);

    const clearState = () => {
        setLoading(true);
        setWeather("");
    }
    // Fetch Data
    const getWeather = async (city) => {
        // Clear state
        clearState();
        if (city) {
            // Fetch
            await axios(`http://api.openweathermap.org/data/2.5/weather?mode=json&q=${city}&appid=b67ac1d7920c598f8cc90c0a230a88d5&units=metric`)
                .then((resp) => setWeather(resp.data))
                .catch(error => { throw new Error(error.response.data.message) })
                .finally(() => setLoading(false));
        }
    };

    return { weather, loading, dateState, getWeather }
}
export default useGetWeather;