import { ChangeEvent, useEffect, useState } from "react";

type Pagination = {
  itemsPerPage: number;
  firstItem: number;
  lastItem: number;
  setItemsPerPage: (e: number) => void;
  setFilter: (e: string) => void;
  totalItems: number;
  sort:string
  handleSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Filter = ({
  itemsPerPage,
  firstItem,
  lastItem,
  setItemsPerPage,
  setFilter,
  totalItems,
  sort,
  handleSortChange
}: Pagination) => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState<number>(itemsPerPage);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const product = e.target.value;
    product ? setSearch(product) : setSearch("");
  };

  useEffect(() => {
    setFilter(search);
  }, [search, setFilter]);

  const handleChangeProductsPerPage = (e: ChangeEvent<HTMLInputElement>) => {
    const number = Number(e.target.value);
    number ? setValue(number) : setValue(16);
  };

  useEffect(() => {
    setItemsPerPage(value);
  }, [value, setItemsPerPage]);

  const handleDropdownClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="flex bg-customBeije-500 py-6 justify-around flex-wrap md:flex-nowrap relative">
      <div className="flex w-4/5 md:w-full justify-center items-center flex-wrap md:mt-0">
        <img
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/filter.svg"
          alt="filter"
        />
        <button
          onClick={handleDropdownClick}
          className="font-poppins font-normal text-xl text-black ml-4 cursor-pointer transition-transform duration-200 hover:scale-105 hover:underline"
        >
          Filter
        </button>

        {isDropdownOpen && (
          <div className="absolute top-24 md:top-20 md:left-52 bg-customBeije-500 border rounded shadow-lg p-4 z-50">
            <label className="font-poppins block mb-2">Sort by:</label>
            <select
              value={sort} onChange={handleSortChange}
              className="font-poppins text-black p-2 border rounded"
            >
              <option className="font-poppins" value="">Select</option>
              <option className="font-poppins" value="Asc">A-z</option>
              <option className="font-poppins" value="Desc">Z-a</option>
              <option className="font-poppins" value="Biggest">Biggest price</option>
              <option className="font-poppins" value="Lowest">Lowest price</option>
            </select>
          </div>
        )}

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

        <div className="mt-5 md:mt-0 md:border-l md:border-black md:ml-5 md:pl-6 flex-wrap">
          <p className="font-poppins">
            Showing {firstItem}–{lastItem} of {totalItems} results
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse w-4/5 md:flex-row md:w-full md:justify-center md:items-center flex-wrap">
        <div>
          <div className="flex justify-center items-center gap-2 md:gap-0 mt-5 md:mt-0">
            <p className="font-poppins md:mx-5 md:mt-0">Show</p>
            <input
            onChange={handleChangeProductsPerPage}
              className="font-poppins text-customBlack-800 w-12 px-2 py-3 bg-white"
              type="text"
              placeholder={value.toString()}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-0 mt-5 md:mt-3 lg:mt-0">
          <p className="font-poppins md:mx-5 md:mt-0">Sort by</p>
          <div className="bg-white">
            <input
              onChange={handleSearchProduct}
              className="font-poppins text-customBlack-800 px-1 py-3 bg-white transition-transform duration-200 hover:scale-110"
              type="text"
              placeholder={search}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
