import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import Card from "../GenericComponents/Card";
import { getProducts } from "../../service";

const OurProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
    getProducts({setProducts});
  }, []);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const displayedProducts = products.slice(0, visibleProducts);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className=" font-poppins font-bold text-4xl text-center text-customBlack-500 mt-12 mb-10">Our Products</h1>
      <div className="max-w-screen-xl gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
      {products && displayedProducts.map((product) => (
          <Card
            key={product.id}
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
        ))}
      </div>
      {visibleProducts < products.length && (
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

export default OurProducts;
