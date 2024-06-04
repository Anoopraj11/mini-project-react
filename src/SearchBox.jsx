import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

// Define the SearchBox component
export default function SearchBox({ updateInfo }) {
  // Use the useState hook to manage the city and error state
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  // Define the API_URL and API_KEY constants
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "4996331546a7cdf5ce2c59a9cea9dd14";

  // Define the getWeatherInfo function to fetch the weather data
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        Humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  // Define the handleChange function to update the city state
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  // Define the handleSubmit function to fetch the weather data and update the parent component
  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  // Render the SearchBox component
  return (
    <>
      <div className="SearchBox">
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br />
          <br />

          <Button variant="contained" type="submit">
            Search
          </Button>
          {error && <p style={{ color: "red" }}>No such place exists</p>}
        </form>
      </div>
    </>
  );
}
