import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const WeatherButton = () => {
  return (
    <div className="weather-buttons">
      <Button variant="warning" className="weather-button">Current Location</Button>
      <Button variant="warning" className="weather-button">Barcelona</Button>
      <Button variant="warning" className="weather-button">Rome</Button>
    </div>
  )
}

export default WeatherButton;
