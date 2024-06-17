import { ChangeEvent, useEffect, useState } from "react";

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

  const handleSearchProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const product = e.target.value;
    product ? setSearch(product) : setSearch("");
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
      <div className="flex w-full justify-center items-center">
        <img
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/filter.svg"
          alt="filter"
        />
        <p className="font-poppins font-normal text-xl text-black ml-4">
          Filter
        </p>
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
        <div className="border-l border-black ml-5 pl-6">
          <p>
            Showing {firstItem}–{lastItem} of {totalItems} results
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <p className="mx-5">Show</p>
        <div>
          <input
            className="text-customBlack-800 w-12 px-2 py-3 bg-white "
            type="text"
            placeholder="16"
            onChange={handleChangeProductsPerPage}
          />
        </div>
        <p className="mx-5">Sort by</p>
        <div className="bg-white">
          <input
            className="text-customBlack-800 px-4 py-3 bg-white "
            type="text"
            placeholder="Default"
            onChange={handleSearchProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
