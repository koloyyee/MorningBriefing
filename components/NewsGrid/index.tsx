import { Pagination } from "@mui/material";
import { ChangeEvent, lazy, useRef, useState } from "react";
import { NewscatcherArticleInterface } from "../../interfaces/Newscatcher.interface";
import "./style.css";
const NewsCard = lazy(() => import("../NewsCard/index"));

type NewsGridProps = {
  searchResult: NewscatcherArticleInterface[];
};

const NewsGrid: React.FC<NewsGridProps> = ({ searchResult }) => {
  const ARTICLE_PER_PAGE = 9;

  // Pagination, article shows on the page.
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage] = useState(ARTICLE_PER_PAGE);

  // ref
  const pageToTop = useRef<null | HTMLDivElement>(null)

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
    
    const scrollToTop=() =>{
      pageToTop.current?.scrollIntoView({
        behavior:"smooth"
      })
    }

  return (
    <section>
      <div className="article-grid" ref={pageToTop}>
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
        onClick={scrollToTop}
      />
    </section>
  );
};

export default NewsGrid;
