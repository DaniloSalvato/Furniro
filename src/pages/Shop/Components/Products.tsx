import Filter from "./Filter";
import Pagination from "./Pagination";
import { useGetItemsQuery } from "../../../stores/slices/Items";
import { ItemType } from "../../../stores/slices/Items/type";
import Card from "../../../components/Card";
import { useFilter } from "./useFilter";

const Products = () => {
  const { data } = useGetItemsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const {
    sort,
    price,
    search,
    categories,
    options,
    totalItems,
    firstItem,
    lastItem,
  } = useFilter(data?.length);

  const items = data
    ?.filter((item) => {
      if (categories.length === 0) {
        return item;
      }
      return categories.find((category) => item.category.includes(category));
    })
    .filter((item) => {
      if (search === "") {
        return item;
      }
      return item.title.toLowerCase().includes(search.toLowerCase());
    })
    .filter((item) => {
      if (options.length === 0) {
        return item;
      }
      if (options.includes("New") && item.isNew) {
        return item;
      }
      if (options.includes("Promotion") && item.inSale) {
        return item;
      }
    })
    .filter((item) => {
      if (price === 0 || price === 10000000) {
        return item;
      }
      if (item.value <= price) return item;
    })
    .sort((a, b) =>
      sort === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  const currentItems = items?.slice(firstItem, lastItem);

  return (
    <>
      <Filter/>
      <div className="w-full flex flex-col justify-center items-center mb-12">
        <h1 className="font-poppins font-bold text-4xl text-center text-customBlack-500 mt-12 mb-10">
          Our Products
        </h1>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center ">
          {data &&
            currentItems?.map((item: ItemType, index) => (
              <Card {...item} key={index} />
            ))}
        </div>

        <Pagination totalItems={totalItems} />
      </div>
    </>
  );
};

export default Products;
