import { useState } from "react";

import Card from "../GenericComponents/Card";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { Item } from "../../types/Item";

const Related = ({category}:Item) => {
  
  const [visibleProducts, setVisibleProducts] = useState(4);

  const itemsState = useSelector((state: RootState) => state.items)

 

  
  const itemsRelated = itemsState.items.filter(item => item.category === category)



  const displayedProducts = itemsRelated.slice(0, visibleProducts);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center border-t border-t-customBlack-950 pt-16">
      <h1 className="font-poppins font-medium text-4xl text-black">
        Related Products
      </h1>
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {displayedProducts.map((item) => (
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

      {visibleProducts < itemsState.items.length && (
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

export default Related;
