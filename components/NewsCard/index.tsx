import React from "react";
import { NewscatcherArticleInterface } from "./interface";
import "./style.css";

import PillTag from "../Reusable/PillTag";

const NewsCard: React.FC<NewscatcherArticleInterface> = (article) => {
  return (
    <>
      <a
        key={article._id}
        href={article.link}
        target="_blank"
        className="news-cards target-blank"
      >
        <img
          className="card-image"
          src={article.media}
          alt={article.title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "../../src/assets/latest_news.jpg";
          }}
        />
        <h4 className="headline"> {article.title}</h4>
        <a
          className="news-rights"
          href={"http://" + article.clean_url}
          target="_blank"
        >
          <small>copyright: {article.rights}</small>
        </a>
        <div className="card-footer">
          <PillTag props={article.topic} />
          <PillTag props={article.country} />

          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </a>
    </>
  );
};
export default NewsCard;
