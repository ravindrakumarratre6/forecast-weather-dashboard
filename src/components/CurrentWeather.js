import React from 'react';
import "../css/CurrentWeather.css"
const CurrentWeather = ({ city, data, unit }) => {
  console.log("data", data, unit);

  // Additional checks for data and data.weather
  if (!data || !data.weather || !data.weather[0]) {
    return <div>Loading...</div>; 
    // or render an empty state or any loading indication
  }

  return (
    <div className='currentweather-conatiner'>
      <h1 className='currentweather-name'>Current Weather {data.name}, {data.sys.country}</h1>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt="Weather Icon"
        className='currentweather-img'
      />
      <p className='currentweather-temp'>Temperature: {data.main.temp}&deg;{unit === 'metric' ? 'C' : 'F'}</p>
      <p className='currentweather-description'>Description: {data.weather[0].description}</p>
      
    </div>
  );
};

export default CurrentWeather;
