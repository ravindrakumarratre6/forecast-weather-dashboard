import React from 'react';
import "../css/ForecastDay.css";

const ForecastDay = ({ date, forecasts, unit }) => {
  const formatDate = (dt) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    return new Date(dt * 1000).toLocaleDateString('en-US', options);
  };

  const firstForecast = forecasts[0];

  return (
    <div className="forecast-day">
      <h3>{formatDate(firstForecast.dt)}</h3>
      <ul className='forecast-day-list'>
      <li key={`img-${firstForecast.dt}`}>
          <img src={`http://openweathermap.org/img/wn/${firstForecast.weather[0].icon}.png`} alt="Weather Icon" />
        </li>
        <li style={{fontSize:"20px",color:"orange"}}>
          {firstForecast.main.temp} {unit === 'metric' ? '°C' : '°F'}
        </li>
        
      </ul>
    </div>
  );
};

export default ForecastDay;
