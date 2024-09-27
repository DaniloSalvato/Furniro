import { Page } from "../../types/Page";

import panel from "../../assets/utils/process-image.png"
import rightArrow from "../../assets/icons/arrow-right.svg"

const Panel = ({ page }: Page) => {
  return (
    <>
      <section className="relative w-full h-20 sm:h-32 md:h-44 lg:h-56 xl:h-80  ">
      <div className="absolute inset-0">
        <img
          className="bg-cover bg-center object-cover blur-xs w-full h-full bg-white opacity-50"
          src={panel}
          alt=""
        />
      </div>
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center ">
        <h1 className=" font-poppins font-medium  text-2xl lg:text-5xl mb-2">{page}</h1>

        <div className="flex justify-center items-center">
          <span className="font-poppins font-semibold text-sm lg:text-base">Home</span>
          <img
            src={rightArrow}
            alt="arrow"
          />
          <span className="font-poppins font-light text-sm">{page}</span>
        </div>
      </div>
      </section>
      
    </>
  );
};

export default Panel;
