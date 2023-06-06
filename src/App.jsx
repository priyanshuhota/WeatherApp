import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import InputBox from './Components/InputBox';
import ResultBox from './Components/ResultBox';
import { useState } from 'react';

function App() {
  
  const[weatherData, setWeatherData] = useState({});

  return (

    <>
      <div className='App'>
        <div className="back">
        <InputBox setWeatherData={setWeatherData}/>
        <ResultBox weatherData={weatherData}/>
        <span className='heading'>AccuWeather</span>
        </div>
      </div>
    </>
  )
}

export default App
