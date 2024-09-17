import { ItemType } from "../../../stores/slices/Items/type";

const Exhibition = ( props : ItemType) => {
  if (!props.id) {
    return (
      <p className="text-center font-montserrat text-4xl font-bold h-screen mt-48">
        Loading...
      </p>
    );
  }

  return (
    <>
      {props.id && (
        <>
          <div className="flex flex-col-reverse items-center md:flex-row md:justify-start md:items-start">
            <div className="flex w-100 md:flex-col md:justify-center items-center md:gap-6 ">
              <div className="flex justify-center">
                <img
                  className="w-4/5 h-4/5 md:h-2/5 md:w-1/3 rounded-xl"
                  src={props.image}
                  alt=""
                />
              </div>
              <div className="flex justify-center ">
                <img
                  className="w-4/5 h-4/5 md:h-2/5 md:w-1/3 rounded-xl"
                  src={props.image}
                  alt=""
                />
              </div>
              <div className="flex justify-center ">
                <img
                  className="w-4/5 h-4/5 md:h-2/5 md:w-1/3 rounded-xl"
                  src={props.image}
                  alt=""
                />
              </div>
              <div className="flex justify-center ">
                <img
                  className="w-4/5 h-4/5 md:h-2/5 md:w-1/3 rounded-xl"
                  src={props.image}
                  alt=""
                />
              </div>
            </div>
            <div className="mb-5 md:h-4/5 md:w-3/5 lg:w-full ">
              <img className="md:h-500 md:w-481 rounded-xl" src={props.image} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Exhibition;
