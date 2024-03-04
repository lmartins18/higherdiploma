import { createContext } from "react";
import useGetWeather from '../hooks/useGetWeather';

export const WeatherContext = createContext({});

export const WeatherContextProvider = (props) => {
    const getWeather = useGetWeather();
    return (
        <WeatherContext.Provider value={{ ...getWeather }}>
            {props.children}
        </WeatherContext.Provider>
    )
}