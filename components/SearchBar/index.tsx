import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  ChangeEvent,
  Dispatch,
  FormEventHandler,
  SetStateAction
} from "react";
import { NewscatcherArticleInterface } from "../../interfaces/Newscatcher.interface";
import "./style.css";

type SearchBar = {
  posts: NewscatcherArticleInterface[];
  setSearchResult: Dispatch<SetStateAction<NewscatcherArticleInterface[]>>;
  setIsSearching: Dispatch<SetStateAction<boolean>>
};

const SearchBar: React.FC<SearchBar> = ({ posts, setSearchResult, setIsSearching }) => {
  const handleChange = (e: ChangeEvent) => {
    let target = e.target as HTMLInputElement;

    if (!target.value || target.value === "") {
      setSearchResult(posts) 
      setIsSearching(false)
    } else{
      const results = posts.filter((post) => {
        console.log(posts)
          return post.title.toLowerCase().includes(target.value.toLowerCase().trim()) ||
           post.summary.toLowerCase().includes(target.value.toLowerCase().trim())
          
      });
      setSearchResult(results);
      setIsSearching(true);

    }
    
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
