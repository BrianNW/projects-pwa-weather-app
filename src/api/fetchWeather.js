import axios from "axios";
import config from "config"

const url = config.URL;
const key = config.API_KEY;

const fetchWeather = async (query) => {
  const response = await axios.get(url);
};
