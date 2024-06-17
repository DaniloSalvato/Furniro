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
        <div className="flex flex-col justify-start items-center w-full h-full py-8">
          <div className="flex w-full my-2 justify-center items-start">
            <img
              className="bg-cover bg-center bg-no-repeat "
              src={item.image}
              alt=""
            />
          </div>

          <div className="flex w-5/6 md:flex-col gap-2 md:gap-8 h-full justify-between items-center m-2 md:m-8">
            <div>
              <img
                className="bg-cover bg-center bg-no-repeat"
                src={item.image}
                alt=""
              />
            </div>

            <div>
              <img
                className=" bg-cover bg-center bg-no-repeat"
                src={item.image}
                alt=""
              />
            </div>

            <div>
              <img
                className=" bg-cover bg-center bg-no-repeat"
                src={item.image}
                alt=""
              />
            </div>

            <div>
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
