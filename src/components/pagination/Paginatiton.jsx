import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Paginatiton({
  itemsPerPage,
  totalResults,
  setPage,
  page,
}) {
  // We start with an empty list of items.

  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  //   useEffect(() => {
  //     // Fetch items from another resources.
  //     setItemOffset((page-1) * 20);
  //     const endOffset = itemOffset + 20;
  //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //     // setCurrentItems(items.slice(itemOffset, endOffset));
  //     // setPageCount(Math.ceil(items / itemsPerPage));
  //   }, [itemOffset, itemsPerPage, items, page]);

  useEffect(() => {
    setPageCount(Math.ceil(totalResults / itemsPerPage));
  }, [itemOffset, totalResults, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalResults;

    setItemOffset(newOffset);
    setPage(event.selected + 1);
  };

  return (
    <div className="mt-10 text-white">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Prev <"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </div>
  );
}
