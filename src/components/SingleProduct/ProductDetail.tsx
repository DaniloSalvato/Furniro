import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Path from "./Path";
import Details from "./Details";
import Related from "./Related";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/Item/itemReducer";

const ProductDetail = () => {
  const { id } = useParams();

  const {items} = useSelector(selectItems)

  const singleItem = items.find((item) => item.id === Number(id));

  if (!singleItem) {
    return (
      <p className="text-center font-montserrat text-4xl font-bold h-screen mt-48">
        Loading...
      </p>
    );
  }
  return (
    <div className="flex flex-col">
      <Path title={singleItem.title} />

      <Details
        id={singleItem.id}
        title={singleItem.title}
        subtitle={singleItem.subtitle}
        about={singleItem.about}
        description={singleItem.description}
        image={singleItem.image}
        star={singleItem.star}
        value={singleItem.value}
        inSale={singleItem.inSale}
        percentage={singleItem.percentage}
        isNew={singleItem.isNew}
        sku={singleItem.sku}
        category={singleItem.category}
        tags={singleItem.tags}
      />
      <Related />
    </div>
  );
};

export default ProductDetail;
