import axios from 'axios';
import 'dotenv/config';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'url';
import { NewscatcherInterface } from '../interfaces/Newscatcher.interface';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function getNewsData(): Promise<NewscatcherInterface> {
    const resp = await axios.get(path.join(__dirname, "news.json"))
    const data: NewscatcherInterface = resp.data
    return data
}