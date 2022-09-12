import axios from "axios";
import { useEffect, useState } from "react";
import {
  NewscatcherArticleInterface,
  NewscatcherInterface,
} from "../components/NewsCard/interface";

import Greetings from "../components/Greeting";
import Header from "../components/Header";
import MobileMenuBtn from "../components/MobileMenuBtn";
import NewsGrid from "../components/NewsGrid";
import Weather from "../components/Weather";

function App() {
  let empty: NewscatcherInterface = {
    status: "",
    articles: [],
  };
  let emptyArray: NewscatcherArticleInterface[] = [];

  // Data from axios

  const [loading, setLoading] = useState(true);
  const [news, setArticles] = useState<NewscatcherInterface>(empty);

  // Search results
  const [searchResult, setSearchResult] =
    useState<NewscatcherArticleInterface[]>(emptyArray);

  async function fetchArticleData() {
    // Fetch data with axios. Currently using local json, soon change back to rapid api.
    const resp = await axios.get("../data/news.json");
    const data: NewscatcherInterface = await resp.data;

    setLoading(true);
    if (typeof data !== "undefined") {
      setArticles(data);
      setSearchResult(data.articles);
    }
    setLoading(false);
  }

  async function fetchData() {
    const options = {
      method: "GET",
      url: "https://newscatcher.p.rapidapi.com/v1/search_free",
      params: { q: "finance", lang: "en", media: "True" },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
      },
    };
    setLoading(true);
    axios.request(options).then(function (response) {
      const data: NewscatcherInterface = response.data;

      setArticles(data);
      setSearchResult(data.articles);

      setLoading(false);
    });
  }

  console.log(searchResult);

  useEffect(() => {
    // fetchArticleData();
    fetchData();
  }, []);

  return (
    <>
      <Header loading={loading} news={news} setSearchResult={setSearchResult} />
      <div className="welcome">
        <Greetings />
        {loading ? "Loading" : <Weather />}
      </div>

      <MobileMenuBtn />
      {loading ? "Loading" : <NewsGrid searchResult={searchResult} />}
    </>
  );
}

export default App;
