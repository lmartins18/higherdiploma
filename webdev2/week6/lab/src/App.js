import './App.css';
import { Weather, WeatherContextProvider } from './components/weather';

function App() {
  return (
    <WeatherContextProvider>
      <div className="App">
        <div id="main-container">
          <Weather />
        </div>
      </div>
    </WeatherContextProvider>
  );
}

export default App;
