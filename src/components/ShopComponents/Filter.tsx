const Filter = () => {
  return (
    <div className="flex bg-customBeije-500 py-12 justify-around flex-wrap md:flex-nowrap">
      <div className="flex w-full justify-center items-center">
        <img
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/filter.svg"
          alt="filter"
        />
        <p className="font-poppins font-normal text-xl text-black ml-2">
          Filter
        </p>
        <img
          className="ml-5"
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/filter-2.svg"
          alt="filter-2"
        />
        <img
          className="ml-5"
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/filter-3.svg"
          alt="filter-3"
        />
        <div className="border-l border-black ml-5 pl-6">
          <p>Showing 1–16 of 32 results</p>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <p>Show</p>
        <div className="bg-white px-3 py-3 ml-5">
          <p className="text-customBlack-800">16</p>
        </div>
        <p className="mx-5">Short by</p>
        <div className="bg-white">
          <p className="text-customBlack-800 px-3 py-3">Default</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
