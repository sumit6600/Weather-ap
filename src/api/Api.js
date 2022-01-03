import axios from "axios";
//import Weather from "../components/Weather";

//const API_KEY = "9f982ce259fac04a5e846afb89a07997 ";
const URL = "http://api.openweathermap.org/data/2.5/weather";

export const getData = async (city, country) => {
  return await axios.get(
    `${URL}?q=${city},${country}&appid=1ad9958e111b3a0942bd3b54e6035865&units=metric`
  );
};
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//${URL}?q=mumbai,india&appid=${API_KEY}
