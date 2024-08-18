import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

// <WeatherButton>은 어떠한 state도 가지고 있지 않고 부모js에서 정의한 set함수를 통해 값을 받아옴
const WeatherButton = ({ cities, setCity, selectedCity, setSelectedCity }) => {
  
  const handleCityClick = (city) => {
    setCity(city);
    setSelectedCity(city);
  };

  return (
    <div className="weather-buttons">
      <Button
        variant={selectedCity === '' ? 'primary' : 'warning'}
        className={`weather-button ${selectedCity === '' ? 'selected' : ''}`}
        onClick={() => {
          setCity('');
          setSelectedCity('');
        }}
      >
        Current Location
      </Button>

      {cities.map((item, index) => (
        <Button
          variant={selectedCity === item ? 'primary' : 'warning'}
          className={`weather-button ${selectedCity === item ? 'selected' : ''}`}
          key={index}
          onClick={() => handleCityClick(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton;
