import filter1 from "../../../assets/icons/filter.svg";
import filter2 from "../../../assets/icons/filter-2.svg";
import filter3 from "../../../assets/icons/filter-3.svg";
import { useFilter } from "./useFilter";

const Filter = () => {
  const {
    searchParams,
    setSearchParams,
    sort,
    price,
    isFilterOpen,
    handleFilterClick,
    firstItem,
    lastItem,
    totalItems
  } = useFilter();

  return (
    <div className="flex bg-customBeije-500 py-6 justify-around flex-wrap md:flex-nowrap relative">
      <div className="flex w-4/5 md:w-full justify-center items-center flex-wrap md:mt-0">
        <img src={filter1} alt="filter" />
        <button
          onClick={handleFilterClick}
          className="font-poppins font-normal text-xl text-black ml-4 cursor-pointer transition-transform duration-200 hover:scale-105 hover:underline"
        >
          Filter
        </button>

        {isFilterOpen && (
          <>
            <div
              className="fixed bg-black w-full h-full inset-0 opacity-50 z-40"
              onClick={handleFilterClick}
            ></div>

            <div className="fixed flex flex-col font-poppins w-full h-full max-w-[60%] md:max-w-[30%] px-3 md:px-10 gap-5 left-0 top-0 bg-customBeije-500 border rounded shadow-lg p-4 z-50 accent-customYellow-900">
              <legend className="flex justify-center items-center text-3xl mb-2 border-b border-black">
                Filter
              </legend>

              <div className="flex flex-col">
                <legend className="text-xl">Sort</legend>
                <div>
                  <input
                    defaultChecked={sort === "asc"}
                    type="radio"
                    id="asc"
                    value="asc"
                    name="sort"
                    onChange={() => {
                      setSearchParams((state) => {
                        state.set("sort", "asc");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="asc" className="px-2">
                    A-Z
                  </label>
                </div>
                <div>
                  <input
                    defaultChecked={sort === "desc"}
                    type="radio"
                    id="desc"
                    value="desc"
                    name="sort"
                    onChange={() => {
                      setSearchParams((state) => {
                        state.set("sort", "desc");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="desc" className="px-2">
                    Z-A
                  </label>
                </div>
              </div>

              <fieldset className="flex flex-col accent-customLunarGreen mb-2">
                <legend className="mb-2 text-xl">Category</legend>
                <div className="flex gap-2">
                  <input
                    defaultChecked={searchParams
                      .getAll("category")
                      .includes("Kitchen")}
                    type="checkbox"
                    id="Kitchen"
                    value="Kitchen"
                    name="category"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSearchParams((state) => {
                          state.append("category", "Kitchen");
                          return state;
                        });
                        return;
                      }
                      setSearchParams((state) => {
                        state.delete("category", "Kitchen");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="Kitchen">Kitchen</label>
                </div>
                <div className="flex gap-2">
                  <input
                    defaultChecked={searchParams
                      .getAll("category")
                      .includes("Living")}
                    type="checkbox"
                    id="Living"
                    value="Living"
                    name="category"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSearchParams((state) => {
                          state.append("category", "Living");
                          return state;
                        });
                        return;
                      }
                      setSearchParams((state) => {
                        state.delete("category", "Living");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="Living">Living</label>
                </div>
                <div className="flex gap-2">
                  <input
                    defaultChecked={searchParams
                      .getAll("category")
                      .includes("Dining")}
                    type="checkbox"
                    id="Dining"
                    value="Dining"
                    name="category"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSearchParams((state) => {
                          state.append("category", "Dining");
                          return state;
                        });
                        return;
                      }
                      setSearchParams((state) => {
                        state.delete("category", "Dining");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="Dining">Dining</label>
                </div>
                <div className="flex gap-2">
                  <input
                    defaultChecked={searchParams
                      .getAll("category")
                      .includes("Bedroom")}
                    type="checkbox"
                    id="Bedroom"
                    value="Bedroom"
                    name="category"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSearchParams((state) => {
                          state.append("category", "Bedroom");
                          return state;
                        });
                        return;
                      }
                      setSearchParams((state) => {
                        state.delete("category", "Bedroom");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="Bedroom">Bedroom</label>
                </div>
              </fieldset>

              <fieldset className="flex flex-col accent-customLunarGreen mb-2">
                <legend className="mb-2 text-xl">Other Options</legend>
                <div className="flex gap-2">
                  <input
                    defaultChecked={searchParams
                      .getAll("category")
                      .includes("Promotion")}
                    type="checkbox"
                    id="Promotion"
                    value="Promotion"
                    name="category"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSearchParams((state) => {
                          state.append("option", "Promotion");
                          return state;
                        });
                        return;
                      }
                      setSearchParams((state) => {
                        state.delete("option", "Promotion");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="Promotion">Promotion</label>
                </div>
                <div className="flex gap-2">
                  <input
                    defaultChecked={searchParams
                      .getAll("option")
                      .includes("New")}
                    type="checkbox"
                    id="New"
                    value="New"
                    name="option"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSearchParams((state) => {
                          state.append("option", "New");
                          return state;
                        });
                        return;
                      }
                      setSearchParams((state) => {
                        state.delete("option", "New");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="New">New</label>
                </div>
              </fieldset>

              <div className="flex flex-col mb-2">
                <p className="mb-2 text-xl">Price</p>
                <div>
                  <input
                    className="accent-customLunarGreen"
                    type="range"
                    id="price"
                    name="price"
                    min="0"
                    max="10000000"
                    step={1000000}
                    value={price}
                    onChange={(e) => {
                      setSearchParams((state) => {
                        state.set("price", e.target.value);
                        return state;
                      });
                    }}
                  />
                  <p>1$ - {price}$</p>
                </div>
              </div>
            </div>
          </>
        )}

        <img className="ml-6" src={filter2} alt="filter-2" />

        <img className="ml-6" src={filter3} alt="filter-3" />

        <div className="mt-5 md:mt-0 md:border-l md:border-black md:ml-5 md:pl-6 flex-wrap">
          <p className="font-poppins">
            Showing {firstItem}–{lastItem} of {totalItems} results
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse w-4/5 md:flex-row md:w-full md:justify-center md:items-center flex-wrap">
        <div>
          <div className="flex justify-center items-center gap-2 md:gap-0 mt-5 md:mt-0">
            <p className="font-poppins md:mx-5 md:mt-0">Show</p>
            <input
              className="font-poppins text-customBlack-800 w-12 px-2 py-3 bg-white"
              type="text"
              onChange={(e) => {
                setSearchParams((state) => {
                  state.set("productPerPage", e.target.value);
                  return state;
                });
                return;
              }}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-0 mt-5 md:mt-3 lg:mt-0">
          <p className="font-poppins md:mx-5 md:mt-0">Sort by</p>
          <div className="bg-white">
            <input
              className="font-poppins text-customBlack-800 px-1 py-3 bg-white transition-transform duration-200 hover:scale-110"
              type="text"
              onChange={(e) => {
                setSearchParams((state) => {
                  state.set("search", e.target.value);
                  return state;
                });
                return;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
