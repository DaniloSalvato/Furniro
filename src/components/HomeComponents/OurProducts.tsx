import { useEffect, useState } from "react";
import Card from "../GenericComponents/Card";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { fetchData } from "../../redux/thunks/item";

const OurProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

  const itemsState = useSelector((state: RootState) => state.items);

  if (itemsState.isLoading) {
    return <div>Loading...</div>;
  }

  if (itemsState.error) {
    return <div>Error: {itemsState.error}</div>;
  }
  
  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const displayedProducts = itemsState.items.slice(0, visibleProducts);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className=" font-poppins font-bold text-4xl text-center text-customBlack-500 mt-12 mb-10">
        Our Products
      </h1>
      <div className="w-11/12 flex flex-wrap -mx-2 justify-items-center">
        {itemsState.items && displayedProducts.map((item) => (
           <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
            <Card
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              about={item.about}
              description={item.description}
              image={item.image}
              star={item.star}
              value={item.value}
              inSale={item.inSale}
              percentage={item.percentage}
              isNew={item.isNew}
              sku={item.sku}
              category={item.category}
              tags={item.tags}
              quantity={item.quantity}
            /> 
            </div>
          ))}
      </div>
      {visibleProducts < itemsState.items.length && (
        <button
          className="font-poppins font-semibold text-base bg-white text-customYellow-900 px-20 py-3 mt-12 mb-16 border border-customYellow-900"
          onClick={showMoreProducts}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default OurProducts
