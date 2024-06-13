import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { getProducts } from "../../service";
import Card from "../GenericComponents/Card";

const Related = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    getProducts({ setProducts });
  }, []);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const displayedProducts = products.slice(0, visibleProducts);

  return (
    <div className="w-full flex flex-col justify-center items-center border-t border-t-customBlack-950 pt-16">
      <h1 className="font-poppins font-medium text-4xl text-black">
        Related Products
      </h1>
      <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid- gap-8 mt-10">
        {displayedProducts.map((product) => (
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

export default Related;
