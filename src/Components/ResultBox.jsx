import React, { useState } from 'react'
import "./style.css";
import image from './icon.jpg'


const ResultBox = ({weatherData}) => {

  return (
    <div className='Result-box'>
      <img src={image} alt="icon not loaded" className='icon-img'/>
      <span className="results">{weatherData.name}</span>
      <span className="temp">{((weatherData?.main?.temp)-273.15).toFixed(2)}&deg;C</span>
      <span className="desc">{(weatherData?.weather?.[0]?.description)}</span>
    </div>
  )
}

export default ResultBox
