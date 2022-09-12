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
  // Data from axios

  const [loading, setLoading] = useState(true);
  const [news, setArticles] = useState<NewscatcherInterface>({
    status: "",
    articles: [],
  });

  // Search results
  const [searchResult, setSearchResult] = useState<
    NewscatcherArticleInterface[]
  >([]);

  async function fetchData() {
    const options = {
      method: "GET",
      url: "https://newscatcher.p.rapidapi.com/v1/latest_headlines",
      params: { topic: "finance", lang: "en", media: "True" },
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

  useEffect(() => {
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
