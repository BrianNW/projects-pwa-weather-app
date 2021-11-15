import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "6a309070db84f508dbe4fc7953125e04";

const fetchWeather = async (query) => {
  const response = await axios.get(URL);
};
