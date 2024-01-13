// components/Forecast.js
import React from 'react';
import ForecastDay from './ForecastDay';
import "../css/Forecast.css"
const Forecast = ({ city, data, unit }) => {
  if (!data) {
    return null;
  }

  // Group forecast data by day
  const groupedForecast = data.reduce((grouped, forecast) => {
    const date = forecast.dt_txt.split(' ')[0];
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(forecast);
    return grouped;
  }, {});

  return (
    <div className="forecast">
      <h2>5-Day Forecast for {city}</h2>
      <div className='forecast-list'>
      {Object.entries(groupedForecast).map(([date, forecasts]) => (
        <ForecastDay key={date} date={date} forecasts={forecasts} unit={unit} />
      ))}
      </div>
    </div>
  );
};

export default Forecast;
