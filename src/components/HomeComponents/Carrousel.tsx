import SplideSlider from "./SplideSlider";

const Carrousel = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-start items-center py-10 bg-customBeije-150">
      <div className="w-4/5 pb-10 md:w-1/3 md:ml-16 md:py-32 lg:ml-52">
        <h2 className="font-poppins font-bold text-4xl text-customBlack-500 mb-4">
          50+ Beautiful rooms inspiration
        </h2>
        <div className="w-4/5">
          <p className="font-poppins font-medium text-base text-customBlack-550 mb-5">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="font-poppins font-semibold text-base text-white bg-customYellow-900 py-3 px-8">
            Explore More
          </button>
        </div>
      </div>

      <div className="w-4/5 md:w-2/3">
        <SplideSlider />
      </div>
    </div>
  );
};

export default Carrousel;
