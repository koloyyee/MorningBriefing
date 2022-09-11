import axios from "axios";
import { lazy, Suspense, useEffect, useState } from "react";
import Greetings from "../components/Greeting";
import Nav from "../components/Nav";
import {
  NewscatcherArticleInterface,
  NewscatcherInterface,
} from "../components/NewsCard/interface";

import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";

const NewsGrid = lazy(() => import("../components/NewsGrid"));

function App() {
  let empty: NewscatcherInterface = {
    status: "",
    articles: [],
  };
  let emptyArray: NewscatcherArticleInterface[] = [];

  // Data from axios
  const [news, setArticles] = useState<NewscatcherInterface>(empty);

  // Search results
  const [searchResult, setSearchResult] =
    useState<NewscatcherArticleInterface[]>(emptyArray);

  async function fetchArticleData() {
    // Fetch data with axios. Currently using local json, soon change back to rapid api.
    const resp = await axios.get("../data/news.json");
    const data: NewscatcherInterface = await resp.data;
    if (typeof data !== "undefined") {
      setArticles(data);
      setSearchResult(data.articles);
    }
  }
  useEffect(() => {
    fetchArticleData();
  }, []);

  return (
    <>
      <header className="header">
        <Greetings />
        <Nav />
        <SearchBar posts={news?.articles} setSearchResult={setSearchResult} />
        <Weather />
      </header>
      <Suspense fallback={<div>Loading</div>}>
        <NewsGrid searchResult={searchResult} />
      </Suspense>
    </>
  );
}

export default App;
