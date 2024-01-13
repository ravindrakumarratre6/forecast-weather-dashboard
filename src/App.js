import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

import UnitToggle from './components/UnitToggle';
const App = () => {
  const [city, setCity] = useState('');
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric'); // Default to Celsius
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCityChange = (newCity) => {
    setCity(newCity);
    setCurrentWeatherData(null);
    setForecastData(null);
    setError(null);
  };

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch current weather data
        const currentWeatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            q: city,
            units: unit,
            appid: 'd372aab78544ae3674d9614de25f99bc' // Replace with your API key
          }
        });
        setCurrentWeatherData(currentWeatherResponse.data);

        // Fetch forecast data for the next five days
        const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            q: city,
            units: unit,
            appid: 'd372aab78544ae3674d9614de25f99bc' // Replace with your API key
          }
        });
        setForecastData(forecastResponse.data.list);
      } catch (error) {
        setError("Error fetching weather data. Please try again.");
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchData();
    }

  }, [city, unit]);

  return (
    <div className="app">
      <SearchBar onCityChange={handleCityChange} onWeatherDataChange={setCurrentWeatherData} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {currentWeatherData && (
        <div className='component-container'>
          <UnitToggle unit={unit} onUnitToggle={handleUnitToggle}/>
          <CurrentWeather city={city} data={currentWeatherData} unit={unit} />
          <Forecast city={city} data={forecastData} unit={unit} />
        </div>
      )}
    </div>
  );
};

export default App;