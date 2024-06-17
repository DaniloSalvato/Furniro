type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (e: number) => void;
  offSet: number;
  setOffSet: (e: number) => void;
};

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const maxItems = 3;

  const sibling = Math.floor(maxItems / 2);

  const startPage = Math.max(currentPage - sibling, 1);

  const pages = Array.from(
    { length: maxItems},
    (_, index) => startPage + index
  );

  return (
    <div className="flex justify-center mt-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          disabled={currentPage === page}
          className={`px-4 py- m-1 border rounded ${
            currentPage === page
              ? "bg-customYellow-900 text-white"
              : "bg-customBeije-500 text-black hover:bg-customYellow-900 hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 m-1 border rounded ${
          currentPage === totalPages
            ? "bg-customYellow-900 text-white"
            : "bg-customBeije-500 text-black hover:bg-customYellow-900 hover:text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
