import { useState } from "react";
import Card from "../../../components/Card";
import { useGetItemsQuery } from "../../../stores/slices/Items";

const OurProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const {data, isLoading, isError} = useGetItemsQuery(undefined)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }
  
  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const displayedProducts = data?.slice(0, visibleProducts);
  

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className=" font-poppins font-bold text-4xl text-center text-customBlack-500 mt-12 mb-10">
        Our Products
      </h1>
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center ">
        {data && displayedProducts?.map((item) => (
           <div key={item.id}>
            <Card {...item}/> 
            </div>
          ))}
      </div>
      {data && visibleProducts < data.length && (
        <button
          className="font-poppins font-semibold text-base bg-white text-customYellow-900 px-20 py-3 mt-12 mb-16 border border-customYellow-900 hover:bg-customYellow-900 hover:text-white transform transition-transform duration-200 hover:scale-105"
          onClick={showMoreProducts}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default OurProducts
