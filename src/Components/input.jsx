import React, { useEffect, useState } from "react"
import './ResultBox.css'
import axios from 'axios'
import Button from "react-bootstrap/Button";
import "./InputBox.css";

const input = () => {
  const apiKey = "cd516994fdb8686e7afe4490c69d8f52";

  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  useEffect(() => {
    getWeatherDetails({ inputCity });
  }, []);

  const [inputCity, setInputCity] = useState("Delhi");

  const handleChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails({ inputCity });
  };

  return (
    <div className="inputBox">
      <span className="Message">Enter the Name of the City below!</span>
      <input
        className="textBox"
        type="text"
        onChange={handleChange}
        value={inputCity}
      ></input>
      <Button className="btn" onClick={handleSearch}>
        Check Weather
      </Button>
    </div>
  );
};

export default input;
