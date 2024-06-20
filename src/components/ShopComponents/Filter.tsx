import { ChangeEvent, useEffect, useRef, useState } from "react";

type Pagination = {
  itemsPerPage: number;
  firstItem: number;
  lastItem: number;
  setItemsPerPage: (e: number) => void;
  setFilter: (e: string) => void;
  totalItems: number;
};
const Filter = ({
  itemsPerPage,
  firstItem,
  lastItem,
  setItemsPerPage,
  setFilter,
  totalItems,
}: Pagination) => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState<number>(itemsPerPage);
  const [isAble, setIsAble] = useState(false);

  const handleSearchProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const product = e.target.value;
    product ? setSearch(product) : setSearch("");
  };

  const filterRef = useRef<HTMLInputElement>(null);

  const handleFilter = () => {
    setIsAble(true);
    if (filterRef.current) {
      filterRef.current.focus();
    }
  };

  useEffect(() => {
    setFilter(search);
  }, [search]);

  const handleChangeProductsPerPage = (e: ChangeEvent<HTMLInputElement>) => {
    const number = Number(e.target.value);
    number ? setValue(number) : setValue(16);
  };

  useEffect(() => {
    setItemsPerPage(value);
  }, [value]);

  return (
    <div className="flex bg-customBeije-500 py-6 justify-around flex-wrap md:flex-nowrap">
      <div className="flex w-4/5 md:w-full justify-center items-center flex-wrap md:mt-0">
        <img
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/filter.svg"
          alt="filter"
        />
        <button
          onClick={handleFilter}
          className="font-poppins font-normal text-xl text-black ml-4 cursor-pointer"
        >
          Filter
        </button>
        <img
          className="ml-6"
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/filter-2.svg"
          alt="filter-2"
        />
        <img
          className="ml-6"
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/filter-3.svg"
          alt="filter-3"
        />
        <div className=" mt-5 md:mt-0 md:border-l md:border-black md:ml-5 md:pl-6 flex-wrap">
          <p>
            Showing {firstItem}–{lastItem} of {totalItems} results
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse w-4/5 md:flex-row md:w-full md:justify-center md:items-center flex-wrap">
        <div>
          <div className="flex justify-center items-center gap-2 md:gap-0 mt-5 md:mt-0">
            <p className="md:mx-5 md:mt-0 ">Show</p>
            <input
              ref={filterRef}
              disabled={isAble ? false : true}
              className="text-customBlack-800 w-12 px-2 py-3 bg-white "
              type="text"
              placeholder="16"
              onChange={handleChangeProductsPerPage}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-0 mt-5 md:mt-0">
          <p className="md:mx-5 md:mt-0">Sort by</p>
          <div className="bg-white">
            <input
              disabled={isAble ? false : true}
              className="text-customBlack-800 px-2 md:px-4 py-3 bg-white "
              type="text"
              placeholder="Default"
              onChange={handleSearchProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
