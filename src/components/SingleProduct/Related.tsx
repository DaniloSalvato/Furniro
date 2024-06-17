import { useState } from "react";

import Card from "../GenericComponents/Card";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";


const Related = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const itemsState = useSelector((state: RootState) => state.items)

  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const displayedProducts = itemsState.items.slice(0, visibleProducts);

  return (
    <div className="w-full flex flex-col justify-center items-center border-t border-t-customBlack-950 pt-16">
      <h1 className="font-poppins font-medium text-4xl text-black">
        Related Products
      </h1>
      <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid- gap-8 mt-10">
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
          className="font-poppins font-semibold text-base bg-white text-customYellow-900 px-20 py-3 mt-12 mb-16 border border-customYellow-900"
          onClick={showMoreProducts}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Related;
