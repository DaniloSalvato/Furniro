import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { Item } from "../../types/Item";

const Exhibition = ({ id }: Item) => {
  const itemsState = useSelector((state: RootState) => state.items);

  const item = itemsState.items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <p className="text-center font-montserrat text-4xl font-bold h-screen mt-48">
        Loading...
      </p>
    );
  }

  return (
    <>
      {item && (
        <div className="flex flex-col w-full h-full py-8 items-center justify-start lg:flex-row-reverse lg:justify-between  ">
          <div className="flex w-full my-2 justify-center items-start lg:w-full">
            <img
              className="bg-cover bg-center bg-no-repeat md:h-500 md:w-481"
              src={item.image}
              alt=""
            />
          </div>

          <div className="flex w-5/6 lg:flex-col gap-2 lg:gap-10 h-full justify-between items-center lg:items-end m-2 lg:m-0 lg:w-1/4 lg:h-full ">
            <div className="lg:w-3/5">
              <img
                className="bg-cover bg-center bg-no-repeat"
                src={item.image}
                alt=""
              />
            </div>

            <div className="lg:w-3/5">
              <img
                className=" bg-cover bg-center bg-no-repeat"
                src={item.image}
                alt=""
              />
            </div>

            <div className="lg:w-3/5">
              <img
                className=" bg-cover bg-center bg-no-repeat"
                src={item.image}
                alt=""
              />
            </div>

            <div className="lg:w-3/5">
              <img
                className=" bg-cover bg-center bg-no-repeat"
                src={item.image}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Exhibition;
