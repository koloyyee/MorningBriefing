import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  ChangeEvent,
  Dispatch,
  FormEventHandler,
  SetStateAction,
} from "react";
import { NewscatcherArticleInterface } from "../NewsCard/interface";
import "./style.css";

type SearchBar = {
  posts: NewscatcherArticleInterface[];
  setSearchResult: Dispatch<SetStateAction<NewscatcherArticleInterface[]>>;
};

const SearchBar: React.FC<SearchBar> = ({ posts, setSearchResult }) => {
  const handleChange = (e: ChangeEvent) => {
    let target = e.target as HTMLInputElement;
    if (!target.value) return setSearchResult(posts);
    const results = posts.filter((post) => {
      if (
        post.title.toLowerCase().includes(target.value.toLowerCase()) ||
        post.summary.toLowerCase().includes(target.value.toLowerCase())
      )
        return posts;
    });
    setSearchResult(results);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search header-item" onSubmit={handleSubmit}>
      <FontAwesomeIcon
        className="search-button"
        icon={faMagnifyingGlass as IconProp}
      />
      <input
        type="text"
        name="search-input"
        id="search"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
