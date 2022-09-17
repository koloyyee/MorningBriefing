import axios from "axios";
import { useEffect, useState } from "react";
import getCity from "../../data/getUserTimezone";
import { CurrentWeatherInterface } from "../../interfaces/Weather.interface";
import "./style.css";

const { VITE_BACKEND_URL } = import.meta.env;

const Weather = () => {
  const emptyTemp: CurrentWeatherInterface = {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    icon: {
      id: "",
      main: "",
      description: "",
      icon: "",
    },
  };
  const [weather, setWeather] = useState<CurrentWeatherInterface>(emptyTemp);

  const fetchWeather = async () => {
    let city = getCity();

    const resp = await axios.get(`${VITE_BACKEND_URL}/weather/${city}`);
    const data: CurrentWeatherInterface = await resp.data;

    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <section className="weather header-item">
      <p>{Math.round(weather.temp)}&#8451;</p>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${weather.icon.icon}@2x.png`}
        alt={weather.icon.description}
      />
    </section>
  );
};

export default Weather;
