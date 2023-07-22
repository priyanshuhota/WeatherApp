import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/style.css";
import InputBox from './Components/InputBox';
import ResultBox from './Components/ResultBox';
import { useState } from 'react';
import img from './Components/clouds.jpg';
import image from './Components/icon.jpg';

function App() {
  
  const[weatherData, setWeatherData] = useState({});

  return (
    <>
      <div className='App'>
        <div className="back">
        <img src={img} className='backImage'/>
        <div className='heading'>GlobeWeather</div>
        </div>
        <InputBox setWeatherData={setWeatherData} />
        <ResultBox weatherData={weatherData} />
      </div>  
    </>
  )
}

export default App
