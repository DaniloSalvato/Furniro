// import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Path from "./Path";
import Details from "./Details";
import Related from "./Related";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

const ProductDetail = () => {
  const { id } = useParams();

  const itemsState = useSelector((state: RootState) => state.items);

  const item = itemsState.items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <p className="text-center font-montserrat text-4xl font-bold h-screen mt-48">
        Loading...
      </p>
    );
  }
  return (
    <div className="flex flex-col">
      <Path title={item.title} />

      <Details
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
      <Related />
    </div>
  );
};

export default ProductDetail;
