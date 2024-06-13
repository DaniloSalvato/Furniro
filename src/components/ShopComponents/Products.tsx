import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { getProducts } from "../../service";
import Card from "../GenericComponents/Card";

const Products = () => {
  const productsPerPage = 16;
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getProducts({ setProducts });
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="font-poppins font-bold text-4xl text-center text-customBlack-500 mt-12 mb-10">
        Our Products
      </h1>
      <div className="max-w-screen-xl gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
        {products &&
          currentProducts.map((product: Product) => (
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

      <div className="flex flex-row justify-center items-center gap-4">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => goToPage(number + 1)}
            className={`font-poppins font-light text-xl text-black px-4 py-2 rounded-md ${
              currentPage === number + 1
                ? "bg-customYellow-900 text-white"
                : "bg-white text-black hover:bg-customYellow-100"
            }`}
          >
            {number + 1}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2   ${
            currentPage === totalPages
              ? ""
              : "bg-white text-black hover:bg-customYellow-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
