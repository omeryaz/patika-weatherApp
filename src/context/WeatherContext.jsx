import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState("İstanbul");

  const [locationInfo, setLocationInfo] = useState({
    İstanbul: {
      lat: 41.01,
      lon: 38.95,
      tempMax: [],
      tempMin: [],
      weatherCode: [],
    },
    Ankara: {
      lat: 39.92,
      lon: 32.85,
      tempMax: [],
      tempMin: [],
      weatherCode: [],
    },
    İzmir: {
      lat: 38.41,
      lon: 27.14,
      tempMax: [],
      tempMin: [],
      weatherCode: [],
    },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLocationInfo({
        ...locationInfo,
        CurrentCity: {
          lat: coords.latitude,
          lon: coords.longitude,
          tempMax: [],
          tempMin: [],
          weatherCode: [],
        },
      });
    });
  }, []);

  useEffect(() => {
    if (!locationInfo[selectedLocation].tempMax[0]) {
      axios(
        `https://api.open-meteo.com/v1/forecast?latitude=${locationInfo[selectedLocation].lat}&longitude=${locationInfo[selectedLocation].lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FMoscow`
      ).then(({ data }) => {
        setLocationInfo({
          ...locationInfo,
          [selectedLocation]: {
            tempMax: [...data.daily.temperature_2m_max],
            tempMin: [...data.daily.temperature_2m_min],
            weatherCode: [...data.daily.weathercode],
          },
        });
      });
    }
  }, [selectedLocation]);

  const values = {
    locationInfo,
    selectedLocation,
    setSelectedLocation,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
