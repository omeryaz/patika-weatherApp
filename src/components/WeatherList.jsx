import React from "react";
import { useWeather } from "../context/WeatherContext";
import WeatherVisual from "./WeatherVisual";

function WeatherList() {
  const { selectedLocation, locationInfo } = useWeather();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeekDigit = new Date().getDay();
  const weatherInfo = locationInfo[selectedLocation];

  const renderList = () => {
    return weatherInfo.tempMax.map((tempMax, index) => (
      <div className="day-container" key={index}>
        <p className="weekday">{days[(dayOfWeekDigit + index) % 7]}</p>
        <WeatherVisual wCode={weatherInfo.weatherCode[index]}></WeatherVisual>
        <p className="max-temp">{tempMax}°C</p>
        <p className="min-temp">{weatherInfo.tempMin[index]}°C</p>
      </div>
    ));
  };
  return (
    <div>
      <h2>{selectedLocation}</h2>
      {renderList()}
    </div>
  );
}

export default WeatherList;
