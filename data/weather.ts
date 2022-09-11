import axios from 'axios';
import 'dotenv/config';
import { dirname } from 'node:path';
import { fileURLToPath } from 'url';
import TempInterface from '../components/Weather/interface';
import getCity from "./getUserTimezone";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const API = process.env.REACT_APP_OPEN_WEATHER_API_KEY
class OpenWeather {
    constructor() {

    }

    async getCurrentWeatherData(lat: number, lon: number) {
        const openWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`
        const fullData = await axios.get(openWeather)
        const temp = fullData.data.main
        const weather = fullData.data.weather
        const iconSrc = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
        console.log(temp, weather, iconSrc)

    }
    async getForecastWeatherData(lat: number, lon: number) {
        const openWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric`

        const fullData = await axios.get(openWeather)
        console.log(fullData.data.list)

    }
    async getWeatherByCity(): Promise<TempInterface> {
        let city = getCity()
        const openWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
        const fullData = await axios.get(openWeather)
        const temp: TempInterface = fullData.data.main
        return temp
    }
}

export default OpenWeather

const ow = new OpenWeather()
ow.getWeatherByCity()