import { Product } from "../../types/Product";

const Description = ({ description, image }: Product) => {
  return (
    <>
      <div className="flex w-full justify-evenly items-center mb-12">
        <h1 className="font-poppins font-medium text-2xl text-black cursor-pointer">
          Description
        </h1>
        <h1 className="font-poppins font-light text-2xl text-customBlack-800 cursor-pointer">
          Additional Information
        </h1>
      </div>
      <div className="flex w-full justify-center items-center">
        <p className="w-4/5 font-poppins font-light text-base text-customBlack-800">
          {description}
        </p>
      </div>
      <div className="flex w-full justify-evenly items-center mt-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Description;
