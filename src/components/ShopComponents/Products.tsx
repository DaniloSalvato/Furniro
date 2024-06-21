import { ChangeEvent, useState } from "react";
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

  const [sortOrder, setSortOrder] = useState('');

  const itemsState = useSelector((state: RootState) => state.items);
  const [items, setItems] = useState<Item[]>(itemsState.items);


  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    setSortOrder(order);

    const sortedItems = [...itemsState.items]

    if (order === 'Asc') {
      sortedItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'Desc') {
      sortedItems.sort((a, b) => b.title.localeCompare(a.title));
    } else if (order === 'Biggest') {
      sortedItems.sort((a, b) => b.value - a.value);
    } else if (order === 'Lowest') {
      sortedItems.sort((a, b) => a.value - b.value);
    }
    setItems(sortedItems);
  };

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
        sort={sortOrder}
        handleSortChange={handleSortChange}
      />
      <div className="w-full flex flex-col justify-center items-center mb-12">
        <h1 className="font-poppins font-bold text-4xl text-center text-customBlack-500 mt-12 mb-10">
          Our Products
        </h1>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center ">
          {itemsState.items &&
            items
              .filter((item) =>
                item.title.toLowerCase().includes(filter.toLowerCase())
              )
              .slice(firstItem, lastItem)
              .map((item: Item) => (
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
