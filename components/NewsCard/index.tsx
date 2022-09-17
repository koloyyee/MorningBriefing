/* eslint-disable max-len */
import React from "react";
import { NewscatcherArticleInterface } from "../../interfaces/Newscatcher.interface";
import "./style.css";

import PillTag from "../Tag";

interface NewsCardProps {
  article: NewscatcherArticleInterface;
  dataKeyIndex: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, dataKeyIndex }) => {
  return (
    <>
      <a
        data-key={dataKeyIndex}
        key={article._id}
        href={article.link}
        target="_blank"
        className="news-cards target-blank"
        rel="noreferrer"
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

        <small className="news-rights">copyright: {article.rights}</small>
        <small className="news-rights date">{article.published_date}</small>
        <p className="summary">{article.summary}</p>
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
