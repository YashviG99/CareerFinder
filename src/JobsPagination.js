import React from "react";
import { Pagination } from "react-bootstrap";

export default function JobsPagination({
  page,
  setPage,
  hasNextPage
}) {

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }

  function nextPage() {
    if (hasNextPage) {
      setPage(page + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }

  return (
    <div
      className="d-flex justify-content-center my-4"
    >

      <Pagination size="lg">

        <Pagination.First
          disabled={page === 1}
          onClick={() => {
            setPage(1);
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }}
        />

        <Pagination.Prev
          disabled={page === 1}
          onClick={previousPage}
        />

        <Pagination.Item active>
          {page}
        </Pagination.Item>

        <Pagination.Next
          disabled={!hasNextPage}
          onClick={nextPage}
        />

      </Pagination>

    </div>
  );
}
