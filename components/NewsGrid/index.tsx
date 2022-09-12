import { Pagination } from "@mui/material";
import { ChangeEvent, lazy, useState } from "react";
import { NewscatcherArticleInterface } from "../NewsCard/interface";
import "./style.css";
const NewsCard = lazy(() => import("../NewsCard/index"));

type NewsGridProps = {
  searchResult: NewscatcherArticleInterface[];
};

const NewsGrid: React.FC<NewsGridProps> = ({ searchResult }) => {
  const ARTICLE_PER_PAGE = 7;

  // Pagination, article shows on the page.
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage] = useState(ARTICLE_PER_PAGE);

  // Current Articles
  const indexOfLastArticle = currentPage * articlePerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlePerPage;
  let sortedArticles = sortBy();
  let currentArticle = sortedArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  function sortBy(input: string = ""): NewscatcherArticleInterface[] {
    switch (input) {
      case "ranked":
        return searchResult.sort(
          (current, next) => parseInt(current.rank) - parseInt(next.rank)
        );
      default:
        return searchResult.sort(
          (current, next) =>
            new Date(next["published_date"]).getDate() -
            new Date(current["published_date"]).getDate()
        );
    }
  }

  // Change page logic
  const paginate = (e: ChangeEvent<unknown>, pageNumber: number) =>
    setCurrentPage(pageNumber);

  return (
    <main>
      <div className="article-grid">
        {currentArticle?.map((article, index) => {
          return (
            <NewsCard dataKeyIndex={index} key={index} article={article} />
          );
        })}
      </div>

      <Pagination
        className="pagination"
        count={Math.ceil(searchResult.length / articlePerPage)}
        page={currentPage}
        onChange={paginate}
        variant="outlined"
        shape="rounded"
      />
    </main>
  );
};

export default NewsGrid;
