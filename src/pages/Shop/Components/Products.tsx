import { ChangeEvent, useState } from "react";

import Filter from "./Filter";

import Pagination from "./Pagination";
import { useGetItemsQuery } from "../../../stores/slices/Items";
import { ItemType } from "../../../stores/slices/Items/type";
import Card from "../../../components/Card";

const Products = () => {
  const { data } = useGetItemsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [offSet, setOffSet] = useState(0);
  const [sortOrder, setSortOrder] = useState("");

  const [items, setItems] = useState<ItemType[] | undefined>(data);

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    setSortOrder(order);

    const sortedItems = [...data!];

    if (order === "Asc") {
      sortedItems?.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === "Desc") {
      sortedItems?.sort((a, b) => b.title.localeCompare(a.title));
    } else if (order === "Biggest") {
      sortedItems?.sort((a, b) => b.value - a.value);
    } else if (order === "Lowest") {
      sortedItems?.sort((a, b) => a.value - b.value);
    }
    setItems(sortedItems);
  };

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const totalItems = data?.length;

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
          {data &&
            items
              ?.filter((item) =>
                item.title.toLowerCase().includes(filter.toLowerCase())
              )
              .slice(firstItem, lastItem)
              .map((item: ItemType, index) => <Card {...item} key={index} />)}
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
