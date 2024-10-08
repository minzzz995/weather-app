import React from 'react'

const WeatherBox = ({weather}) => {

  return (
    <div className="weather-box">
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp !== undefined ? `${weather.main.temp}°C / ${(weather.main.temp * 1.8 + 32).toFixed(1)}°F` : '°C / °F'}</h2>
        <h3>{weather?.weather[0].description}</h3>      
    </div>
  )
}

export default WeatherBox;
