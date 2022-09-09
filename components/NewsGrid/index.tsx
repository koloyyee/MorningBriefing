import { lazy, Suspense, useEffect, useState } from "react";
import { NewscatcherInterface } from "../NewsCard/interface";
import "./style.css";

const NewsCard = lazy(() => import("../NewsCard/index"));

export default function NewsGrid() {
  const [news, setArticles] = useState<NewscatcherInterface | undefined>();

  async function fetchArticleData() {
    const resp = await fetch("../data/news.json");
    const data: NewscatcherInterface = await resp.json();
    setArticles(data);
  }

  useEffect(() => {
    fetchArticleData();
  }, []);

  console.log(news?.articles.length);

  return (
    <div className="article-grid">
      <Suspense fallback={<div> Loading... </div>}>
        {news?.articles.map((article) => {
          return <NewsCard {...article} />;
        })}
      </Suspense>
    </div>
  );
}
