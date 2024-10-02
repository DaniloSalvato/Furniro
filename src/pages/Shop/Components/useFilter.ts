import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useFilter = (length?: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") ?? "asc";
  const price = Number(searchParams.get("price")) ?? 20000000;

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const search = searchParams.get("search") || "";
  const categories = searchParams.getAll("category");
  const options = searchParams.getAll("option");
  const currentPage = Number(searchParams.get("currentPage")) || 1;
  const productPerPage = Number(searchParams.get("productPerPage")) || 16;

  const lastItem = currentPage * productPerPage;
  const firstItem = lastItem - productPerPage;

  const totalItems = length;

  return {
    searchParams,
    setSearchParams,
    sort,
    price,
    isFilterOpen,
    handleFilterClick,
    search,
    categories,
    options,
    totalItems,
    firstItem,
    lastItem,
  };
};
