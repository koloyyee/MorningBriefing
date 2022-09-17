import React from "react";
import "./style.css";

import { NewsSearchInterface } from "../../interfaces/NewsSearch.interface";
import SearchBar from "../SearchBar";

const Header: React.FC<NewsSearchInterface> = ({
  loading,
  news,
  setSearchResult,
}) => {
  return (
    <header className="header">
      <SearchBar posts={news?.articles} setSearchResult={setSearchResult} />
    </header>
  );
};

export default Header;
