import { useState } from "react";
import OpenWeather from "../../data/weather";
import TempInterface from "./interface";

const Weather = () => {
  const emptyTemp: TempInterface = {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  };

  const [temp, setTemp] = useState<TempInterface>(emptyTemp);

  const fetchOpenWeatherData = async () => {
    const ow = new OpenWeather();
    const cityTemp = await ow.getWeatherByCity();
    console.log(cityTemp);
  };
  fetchOpenWeatherData();
  return <div>{temp.temp}</div>;
};

export default Weather;
