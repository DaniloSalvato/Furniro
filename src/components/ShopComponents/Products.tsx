import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/reducers";
import { Item } from "../../types/Item";

import Filter from "./Filter";
import Card from "../GenericComponents/Card";
import Pagination from "./Pagination";

const Products = () => {
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [offSet, setOffSet] = useState(0);
  const [sort, setSort] = useState("All")

  const itemsState = useSelector((state: RootState) => state.items);

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const totalItems = itemsState.items.length;

  return (
    <>
      <Filter
        itemsPerPage={itemsPerPage}
        firstItem={firstItem}
        lastItem={lastItem}
        setItemsPerPage={setItemsPerPage}
        setFilter={setFilter}
        totalItems={totalItems}
        sort={sort}
        setSort={setSort}
      />
      <div className="w-full flex flex-col justify-center items-center mb-12">
        <h1 className="font-poppins font-bold text-4xl text-center text-customBlack-500 mt-12 mb-10">
          Our Products
        </h1>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center ">
          {itemsState.items &&
            itemsState.items
              .filter((product) =>
                product.title.toLowerCase().includes(filter.toLowerCase())
              )
              .sort((a, b) =>sort === "Asc" ? a.title.localeCompare(b.title): b.title.localeCompare(a.title))
              .slice(firstItem, lastItem)
              .map((product: Item) => (
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
                  quantity={product.quantity}
                />
              ))}
        </div>

        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          offSet={offSet}
          setOffSet={setOffSet}
        />
      </div>
    </>
  );
};

export default Products;
