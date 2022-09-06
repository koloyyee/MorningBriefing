import axios from 'axios';
import 'dotenv/config';
import { dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let lat = 22.316325
let lon = 114.184326

async function getCurrentWeatherData(lat: number, lon: number) {
    const openWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
    const fullData = await axios.get(openWeather)
    const temp = fullData.data.main
    const weather = fullData.data.weather
    const iconSrc = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    console.log(temp, weather, iconSrc)

}
async function getForecastWeatherData(lat: number, lon: number) {
    const openWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`

    const fullData = await axios.get(openWeather)
    console.log(fullData.data.list)

}

getCurrentWeatherData(lat, lon)
// getForecastWeatherData(lat, lon)