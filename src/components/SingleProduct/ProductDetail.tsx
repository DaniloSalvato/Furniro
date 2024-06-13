import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types/Product";
import { getProductById } from "../../service";

import Path from "./Path";
import Details from "./Details";
import Related from "./Related";

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const param = useParams();
  const paramId = Number(param.id);

  useEffect(() => {
    getProductById({ setProduct, paramId });
  }, []);

  if (!product) {
    return (
      <p className="text-center font-montserrat text-4xl font-bold h-screen mt-48">
        Loading...
      </p>
    );
  }
  return (
    <div className="flex flex-col">
      <Path title={product.title} />
      <Details 
      id={product.id} 
      title={product.title} 
      subtitle={product.subtitle}
      about={product.about}
      description={product.description} 
      image={product.image} 
      star={product.star}
      value={product.value} 
      inSale={product.inSale} 
      percentage={product.percentage} 
      isNew={product.isNew} 
      sku={product.sku}
      category={product.category}
      tags={product.tags}
      />
      <Related />
    </div>
  );
};

export default ProductDetail;
