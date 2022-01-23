import axios from "axios";
import config from "./config"

const url = config.URL;
const key = config.API_KEY;

//export so this async function can be used
export const fetchWeather = async (query) => {
  const data = await axios.get(url, {
    //first param is url, second param is the object for the data
    params: {
      q: query,
      units: 'metric',
      APPID: key,
    }
  })

  return data;
};
