/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import axios from "axios";
import { MouseEventHandler, useEffect, useState } from "react";
import {
  NewscatcherArticleInterface,
  NewscatcherInterface,
} from "../../interfaces/Newscatcher.interface";
import Main from "../Main";
import NavItem from "../NavItem";
import SearchBar from "../SearchBar";
import "./style.css";

const { VITE_BACKEND_URL } = import.meta.env;

/**
 * Nav will be responsible for passing down the state.
 * React router - pass query to Main as part of the query.
 * Header
 * @return {void}
 */
export default function Nav() {
  const [loading, setLoading] = useState(true);
  const [news, setArticles] = useState<NewscatcherInterface>({
    status: "",
    articles: [],
  });

  // Clicking on the a tag to trigger change on endpoint
  const [endpoint, setEndpoint] = useState("news");
  /**
   * @param {Event} e - get the target value and change the fetch.
   */
  const queryTopic: MouseEventHandler<HTMLLIElement> = (e: MouseEvent) => {
    const endpoint = e.target.dataset.endpoint;
    setEndpoint(endpoint);
    fetchAPI(endpoint);
  };

  // Search results
  const [searchResult, setSearchResult] = useState<
    NewscatcherArticleInterface[]
  >([]);

  const fetchAPI = async (value: string = endpoint) => {
    const resp = await axios.get(`${VITE_BACKEND_URL}/news/${value}`);
    const data = await resp.data;
    setLoading(true);

    setArticles(data);
    setSearchResult(data.articles);
    setLoading(false);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const topics = ["news", , "finance", "business", "tech", "food"];
  console.log(news.articles.length);

  return (
    <>
      <nav className="nav">
        <SearchBar posts={news?.articles} setSearchResult={setSearchResult} />
        <ul className="menu">
          {topics.map((topic, index) => {
            return (
              <li key={index} className="menu-item" onClick={queryTopic}>
                <NavItem endpoint={topic!} />
              </li>
            );
          })}
        </ul>
      </nav>

      <Main loading={loading} searchResult={searchResult} />
    </>
  );
}
