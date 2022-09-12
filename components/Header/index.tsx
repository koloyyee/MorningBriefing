import React from "react";
import Nav from "../Nav";
import "./style.css";

import SearchBar from "../SearchBar";
import { NewsSearchInterface } from "./interface";

const Header: React.FC<NewsSearchInterface> = ({
  loading,
  news,
  setSearchResult,
}) => {
  return (
    <>
      <header className="header">
        <SearchBar posts={news?.articles} setSearchResult={setSearchResult} />
        <Nav />
      </header>
    </>
  );
};

export default Header;
