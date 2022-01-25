import React, {useState} from 'react';

import {fetchWeather} from './api/fetchWeather';
import './App.css';

const App = () => {
  // a) set the variable and function for useState hook
  const [query, setQuery] = useState('');

  // another useState field to get weather and set it
  const [weather, setWeather] = useState({});

  // b) async arrow function with event variable to detect key pressed, if pressed, await the api query
  const search = async (e) => {
    
    // if enter key on the keyboard is entered
    if(e.key === 'Enter') {

      // pass the query variable as an API call to fetchWeather from our useState variable above
      const data = await fetchWeather(query)

      //set the weather to the data we've received
      setWeather(data);

      //reset data after pressing enter and querying
      setQuery(' ');
      console.log(data);
    }
  }

  return(
    // c) set up div container with the required input element and parameters
    // d) if onChange (event) is pressed, run the setQuery useState function
  <div className="main-container">
    {/* value and onChange below need to be coming from the state using the useState hook*/}
    <input type="text" className="search" placeholder="Search..." value={query}onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>

    {/* if weather.main exists, return the react component */}
    {weather.main && ( 
      <div className="city"> 
        <h2 className="city-name">
          <span className="city-name">{weather.name}</span>
          <sup> {weather.sys.country}</sup>
        </h2> 
        <div className="city-temp"> {Math.round(weather.main.temp)} <sup> &deg;C</sup></div>
        <div className="info"> 
          <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
          <p>{weather.weather[0].description}</p>
        </div>
      </div>
    )};
  </div>
  )};

  export default App;