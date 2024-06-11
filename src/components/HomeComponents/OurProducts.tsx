import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import Card from "../GenericComponents/Card";
import { getProducts } from "../../service";

const OurProducts = () => {
  

  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    
    getProducts({setProducts});
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className=" font-poppins font-bold text-4xl text-center text-customBlack-500 mt-12 mb-10">Our Products</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
        {products &&
          products.map((product: Product) => (
            <Card key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              value={product.value}
              inSale={product.inSale}
              percentage={product.percentage}
              isNew={product.isNew}
            />
          ))}
      </div>
    </div>
  );
};

export default OurProducts;
