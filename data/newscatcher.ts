import axios from 'axios';
import 'dotenv/config';
import fs from "node:fs";
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const options = {
    method: 'GET',
    url: 'https://newscatcher.p.rapidapi.com/v1/latest_headlines',
    params: { lang: 'en', media: 'True' },
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    // console.log(response.data);
    const data = JSON.stringify(response.data)
    fs.writeFileSync(path.join(__dirname, "news.json"), data)


}).catch(function (error) {
    console.error(error);
});