/* eslint-disable max-len */
import React, { useState } from "react";
import { NewscatcherArticleInterface } from "../../interfaces/Newscatcher.interface";

import "./style.css";

import PillTag from "../Tag";

interface NewsCardProps {
  article: NewscatcherArticleInterface;
  dataKeyIndex: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, dataKeyIndex }) => {
  const [fallbackImg, setFallbackImg] = useState<string | undefined>(
    "../../src/assets/latest_news.jpg"
  );
  const onError = () => {
    setFallbackImg(fallbackImg);
  };
 
  const showMore =(event:React.MouseEvent)=>{
    const showContent = document.getElementById(event.target.dataset.target)
    if(showContent?.classList.contains('expand-active')){
      event.currentTarget.textContent = event.target.dataset.showtext
    } else {
      event.currentTarget.textContent = event.target.dataset.hidetext 
    }
    showContent?.classList.toggle('expand-active')
  }

  return (
    <div className="news-cards" data-key={dataKeyIndex}>
      <a
        
        key={article._id}
        href={article.link}
        target="_blank"
        className="target-blank"
        rel="noreferrer"
      >
        <img
          className="card-image"
          src={article.media}
          alt={article.title}
          onError={onError}
        />
      </a>

        <h4 className="headline"> {article.title}</h4>

        <small className="news-rights">copyright: {article.rights}</small>
        <small className="news-rights date">{article.published_date}</small>
        <p className="summary" id={article._id}>{article.summary}</p>
        <div className="show-more">
          <span 
          expand-more="true" 
          data-hidetext="show less..." data-showtext="show more..." 
          data-target={article._id} className="summary"
          onClick={showMore}
          >...show more</span>
        </div>
        <div className="card-footer">
          <PillTag props={article.topic} />
          <PillTag props={article.country} />

          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
    </div>
  );
};
export default NewsCard;
