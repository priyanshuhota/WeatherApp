import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./InputBox.css";
import axios from 'axios'

const InputBox = ({setWeatherData}) => {
  const [inputCity, setInputCity] = useState("");

  const handleChange = (e) => {
    setInputCity(e.target.value);
  };

  const apiKey = "cd516994fdb8686e7afe4490c69d8f52";

  const[data, setData] = useState({})

  const getWeatherDetails = (cityName) =>{
    if(!cityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    axios.get(apiURL).then((res)=>{
      console.log("response:",res.data)
      setData(res.data);
      setWeatherData(data)
    }).catch((err)=>{
      console.log("error:", err) 
    })
  }

  useEffect(()=>{
    getWeatherDetails(inputCity)
  },[])

  const handleSearch = () => {
    getWeatherDetails(inputCity)
  };

  return (
    <div className="inputBox">
      <span className="Message">Enter the Name of the City below!</span>
      <input className="textBox" type="text" onChange={handleChange} placeHolder= "Name of the City" value={inputCity}/>
      <Button className="btn" onClick={handleSearch}>
        Check Temperature
      </Button>
    </div>
  );
};

export default InputBox;
