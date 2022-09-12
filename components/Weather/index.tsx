import axios from "axios";
import { useEffect, useState } from "react";
import getCity from "../../data/getUserTimezone";
import { IconInterface, TempInterface } from "./interface";
import "./style.css";

const API = import.meta.env.VITE_OPEN_WEATHER;

const Weather = () => {
  const emptyTemp: TempInterface = {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  };
  const emptyIcon: IconInterface = {
    id: "",
    main: "",
    description: "",
    icon: "",
  };
  const [weather, setWeather] = useState<TempInterface>(emptyTemp);
  const [iconData, setIcon] = useState<IconInterface>(emptyIcon);

  const fetchOpenWeatherMain = async () => {
    let city = getCity();
    const openWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
    const fullData = await axios.get(openWeather);
    const temp: TempInterface = fullData.data.main;
    const iconData: IconInterface = fullData.data.weather[0];

    setIcon(iconData);
    setWeather(temp);
  };
  useEffect(() => {
    fetchOpenWeatherMain();
  }, []);

  return (
    <section className="weather header-item">
      <p>{Math.round(weather.temp)}&#8451;</p>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${iconData.icon}@2x.png`}
        alt={iconData.description}
      />
    </section>
  );
};

export default Weather;
