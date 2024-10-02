import { useSearchParams } from "react-router-dom";

type PaginationProps = {
  totalItems: number | undefined;
};

const Pagination = ({ totalItems }: PaginationProps) => {
  const MAX_BUTTON = 3;

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("currentPage")) || 1;
  const itemsPerPage = Number(searchParams.get("productsPerPage")) || 16;

  const totalPages = Math.ceil(totalItems! / itemsPerPage);

  const sibling = Math.floor(MAX_BUTTON / 2);

  const startPage = Math.max(currentPage - sibling, 1);

  const pages = Array.from(
    { length: MAX_BUTTON },
    (_, index) => startPage + index
  );

  const handlePageClick = (page: number) => {
    setSearchParams((state) => {
      state.set("currentPage", page.toString());
      return state;
    });
  };

  return (
    <ul className="flex justify-center mt-4">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 m-1 border rounded ${
          currentPage === totalPages
            ? "bg-customYellow-900 text-white"
            : "bg-customBeije-500 text-black hover:bg-customYellow-900 hover:text-white"
        }`}
      >
        Prev
      </button>
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
    </ul>
  );
};

export default Pagination;
