import React from "react";
import "./style.css";

type Pagination = {
  articlePerPage: number;
  totalArticle: number | undefined;
  paginate: (number: number) => void;
};

const Pagination: React.FC<Pagination> = ({
  articlePerPage,
  totalArticle,
  paginate,
}) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalArticle! / articlePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <a
              key={number}
              onClick={() => paginate(number)}
              href="!#"
              className="page-link"
            >
              <li className="page-item">{number}</li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
