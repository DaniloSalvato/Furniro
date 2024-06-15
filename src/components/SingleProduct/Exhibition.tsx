import { Item } from "../../types/Item";

const Exhibition = ({
  image,
}: Item) => {
  return (
    <div className="flex w-full h-full my-8">
      <div className="flex flex-col gap-8 w-1/4 h-full justify-start items-center">
        <div className="h-20 max-w-20">
          <img
            className=" bg-cover bg-center bg-no-repeat"
            src={image}
            alt=""
          />
        </div>
        <div className="h-20 max-w-20">
          <img
            className=" bg-cover bg-center bg-no-repeat"
            src={image}
            alt=""
          />
        </div>
        <div className="h-20 max-w-20">
          <img
            className=" bg-cover bg-center bg-no-repeat"
            src={image}
            alt=""
          />
        </div>
        <div className="h-20 max-w-20">
          <img
            className=" bg-cover bg-center bg-no-repeat"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="flex w-3/4 h-full justify-center items-start">
        <div className="max-w-single">
          <img
            className=" bg-cover bg-center bg-no-repeat"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
