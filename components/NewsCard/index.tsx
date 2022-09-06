import { useEffect, useState } from "react";
import { NewscatcherInterface } from "./interface";
import "./style.css";

export default function NewsCard() {
  const [article, setArticles] = useState<NewscatcherInterface | undefined>();

  async function fetchArticleData() {
    const resp = await fetch("../data/news.json");
    const data = await resp.json();
    setArticles(data);
  }

  useEffect(() => {
    fetchArticleData();
  }, []);
  return (
    <div className="article-grid">
      {article?.articles.slice(0, 10).map((details) => {
        return (
          <a key={details._id} href={details.link} target="_blank">
            <div className="news-cards">
              <img
                className="card-image"
                src={details.media_content[0]}
                alt={details.title}
              />
              <h2> {details.title}</h2>
              <p className="news-rights">{details.rights}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
