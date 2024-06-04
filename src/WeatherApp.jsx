import { useState } from "react";

// Import the InfoBox and SearchBox components
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

// Define the WeatherApp component
export default function WeatherApp() {
  // Use the useState hook to manage the weatherInfo state
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Gwalior",
    Humidity: 48,
    feelsLike: 32.31,
    temp: 31.05,
    tempMax: 31.05,
    tempMin: 31.05,
    weather: "haze",
  });

  // Define the updateInfo function to update the weatherInfo state
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  // Render the WeatherApp component
  return (
    <>
      <div>
        <h2>Weather App</h2>
        {/* Render the SearchBox component and pass the updateInfo function as a prop */}
        <SearchBox updateInfo={updateInfo} />
        {/* Render the InfoBox component and pass the weatherInfo state as a prop */}
        <InfoBox info={weatherInfo} />
      </div>
    </>
  );
}
