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

const { VITE_BACKEND_URL } = import.meta.env;

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

  const fetchAPI = async () => {
    const resp = await axios.get(`${VITE_BACKEND_URL}/newscatcher`);
    const data = await resp.data;
    console.log(data);
    setLoading(true);

    setArticles(data);
    setSearchResult(data.articles);

    setLoading(false);
  };

  useEffect(() => {
    fetchAPI();
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
