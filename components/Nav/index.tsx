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
  const [endpoint, setEndpoint] = useState<string | undefined>("news");
  /**
   * @param {Event} event - get the target value and change the fetch.
   */
  const queryTopic: MouseEventHandler<HTMLAnchorElement> = (
    event: React.MouseEvent
  ) => {
    if (event.target instanceof HTMLAnchorElement) {
      const endpoint = event.target.dataset.endpoint;
      setEndpoint(endpoint);
      fetchAPI(endpoint);
    }
  };

  // Search results
  const [searchResult, setSearchResult] = useState<
    NewscatcherArticleInterface[]
  >([]);

  const fetchAPI = async (value: string | undefined = endpoint) => {
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

  return (
    <>
      <nav className="nav">
        <SearchBar posts={news?.articles} setSearchResult={setSearchResult} />
        <ul className="menu">
          {topics.map((topic, index) => {
            return (
              <li key={index} className="menu-item">
                <NavItem endpoint={topic!} onClickHandler={queryTopic} />
              </li>
            );
          })}
        </ul>
      </nav>

      <Main loading={loading} searchResult={searchResult} />
    </>
  );
}
