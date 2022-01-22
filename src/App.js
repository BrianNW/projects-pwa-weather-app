import React, {useState} from 'react';

import {fetchWeather} from './api/fetchWeather';
import './App.css';

const App = () => {
  // a) set the variable and function for useState hook
  const [query, setQuery] = useState('');

  // b) async arrow function with event variable to detect key pressed, if pressed, await the api query
  const search = async (e) => {
    // if keyboard  is enter
    if(e.key === 'Enter') {
      // pass the query variable as an API call to fetchWeather from our useState variable above
      const data = await fetchWeather(query)

      console.log(data);
    }
  }

  return(
    // c) set up div container with the required input element and parameters
    // d) if onChange (event) is pressed, run the setQuery useState function
  <div className="main-container">
    {/* value and onChange below need to be coming from the state using the useState hook*/}
    <input
      type="text"
      className="search"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={search}
    />
  </div>
  )}

  export default App;