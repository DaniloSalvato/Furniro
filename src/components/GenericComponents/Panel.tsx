import { Page } from "../../types/Page";

const Panel = ({ page }: Page) => {
  return (
    <>
      <div className="relative w-full h-20 sm:h-32 md:h-44 lg:h-56 xl:h-80  ">
      <div className="absolute inset-0">
        <img
          className="bg-cover bg-center object-cover blur-xs w-full h-full bg-white opacity-50"
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/utils/process-image.png"
          alt=""
        />
      </div>
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center ">
        <h1 className=" font-poppins font-medium  text-2xl lg:text-5xl mb-2">{page}</h1>

        <div className="flex justify-center items-center">
          <span className="font-poppins font-semibold text-sm lg:text-base">Home</span>
          <img
            src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/arrow-right.svg"
            alt="arrow"
          />
          <span className="font-poppins font-light text-sm">{page}</span>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Panel;
