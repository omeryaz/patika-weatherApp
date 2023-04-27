import React from "react";
import clearDay from "../svg/clear-day.svg";
import fog from "../svg/fog.svg";
import drizzle from "../svg/drizzle.svg";
import rain from "../svg/rain.svg";
import snow from "../svg/snow.svg";
import thunder from "../svg/thunderstorms.svg";

function WeatherVisual({ wCode }) {
  const visualFunc = (code) => {
    switch (code) {
      case 0:
      case 1:
      case 2:
      case 3:
        return <img src={clearDay} alt="Clear Day" />;
      case 45:
      case 48:
        return <img src={fog} alt="Foggy" />;
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        return <img src={drizzle} alt="Drizzle" />;
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
      case 80:
      case 81:
      case 82:
        return <img src={rain} alt="Rainy" />;
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return <img src={snow} alt="Snowy" />;
      case 95:
      case 96:
      case 99:
        return <img src={thunder} alt="Thunderstorm" />;
      default:
        return "Not implemented yet!";
    }
  };

  return <div className="visual"> {visualFunc(wCode)}</div>;
}

export default WeatherVisual;
