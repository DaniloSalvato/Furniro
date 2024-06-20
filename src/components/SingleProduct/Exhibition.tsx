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
      {/* {item && (
        <div className="flex flex-col w-full h-full py-8 md:py-0 items-center justify-start md:flex-row-reverse lg:justify-between">
          <div className="flex w-full h-full my-2 md:my-0 justify-center items-start ">
            <img
              className="bg-cover bg-center bg-no-repeat md:h-500 md:w-481"
              src={item.image}
              alt=""
            />
          </div>

          <div className="flex w-5/6 gap-2 md:flex-col md:w-1/3 md:items-center lg:gap-0 h-full justify-between items-center  lg:items-end m-2 lg:m-0 lg:w-1/4 lg:h-full ">
            <div className="w-3/5 md:w-1/4 lg:w-full">
              <img
                className="bg-cover bg-center bg-no-repeat md:w-20"
                src={item.image}
                alt=""
              />
            </div>

            <div className="w-3/5 md:w-1/4 lg:w-full">
              <img
                className=" bg-cover bg-center bg-no-repeat"
                src={item.image}
                alt=""
              />
            </div>

            <div className="w-3/5 md:w-1/4 lg:w-full">
              <img
                className=" bg-cover bg-center bg-no-repeat"
                src={item.image}
                alt=""
              />
            </div>

            <div className="w-3/5 md:w-1/4 lg:w-full">
              <img
                className=" bg-cover bg-center bg-no-repeat"
                src={item.image}
                alt=""
              />
            </div>
          </div>
        </div>
      )} */}
      {item && (
        <>
          <div className="flex flex-col-reverse items-center md:flex-row md:justify-start md:items-start">
            <div className="flex w-100 md:flex-col md:justify-center items-center md:gap-6 ">
              <div className="flex justify-center">
                <img
                  className="w-4/5 h-4/5 md:h-2/5 md:w-1/3 rounded-xl"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flex justify-center ">
                <img
                  className="w-4/5 h-4/5 md:h-2/5 md:w-1/3 rounded-xl"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flex justify-center ">
                <img
                  className="w-4/5 h-4/5 md:h-2/5 md:w-1/3 rounded-xl"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flex justify-center ">
                <img
                  className="w-4/5 h-4/5 md:h-2/5 md:w-1/3 rounded-xl"
                  src={item.image}
                  alt=""
                />
              </div>
            </div>
            <div className="mb-5 md:h-4/5 md:w-3/5 lg:w-full ">
              <img className="md:h-500 md:w-481 rounded-xl" src={item.image} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Exhibition;
