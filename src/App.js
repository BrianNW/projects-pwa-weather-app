import React, {useState} from 'react';

import {fetchWeather} from './api/fetchWeather';
import './App.css';

const App = () => {
  // set the variable and function for useState
  const [query, setQuery] = useState('');

  const search = async (e) => {
    // if keyboard  is enter
    if(e.key === 'Enter') {
      // pass the query variable from our useState above
      const data = await fetchWeather(query)

      console.log(data);
    }
  }

  return(
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