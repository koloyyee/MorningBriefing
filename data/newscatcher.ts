import axios from 'axios';
import 'dotenv/config';
import { NewscatcherInterface } from '../components/NewsCard/interface';
// import fs from "node:fs";
// import path, { dirname } from 'node:path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
const API = process.env.VITE_OPEN_WEATHER;


export default function getNewsData(): Promise<NewscatcherInterface> {
    const options = {
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/latest_headlines',
        params: { topic: 'finance', lang: 'en', media: 'True' },
        headers: {
            'X-RapidAPI-Key': API,
            'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        }
    };

    let data = axios.request(options).then(function (response) {
        // console.log(response.data);
        const data: NewscatcherInterface = response.data
        // fs.writeFileSync(path.join(__dirname, "news.json"), data)
        return data

    })

    // .catch(function (error) {
    //     console.error(error);

    // });
    return data
}