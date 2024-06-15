import { useEffect, useState } from "react";
import Card from "../GenericComponents/Card";
import { fetchItems } from "../../redux/Item/itemActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/Item/itemReducer";

const OurProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchItems())
  },[])

  const {items} = useSelector(selectItems)
  
  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const displayedProducts = items.slice(0, visibleProducts);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className=" font-poppins font-bold text-4xl text-center text-customBlack-500 mt-12 mb-10">
        Our Products
      </h1>
      <div className="max-w-screen-xl gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
        {items! && displayedProducts.map((item) => (
            <Card
              key={item.id}
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
          ))}
      </div>
      {visibleProducts < items.length && (
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
