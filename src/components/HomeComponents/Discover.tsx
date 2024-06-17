const Discover = () => {
  return (
    <div className="bg-background-home bg-cover bg-center w-full h-screen" >
      <div className="flex w-full h-full ">
        <div className="md:flex md:flex-1"></div>

        <div className="flex flex-1 w-full h-full items-center justify-center md:justify-start">
          
          <div className="bg-customYellow-100 w-4/5 h-2/5 md:w-5/6 md:h-5/6 lg:h-3/4 xl:h-2/3 2xl:h-2/4 px-6 md:px-5 lg:px-10 lg:mx-7 rounded-lg">
            <h2 className="font-poppins font-semibold md:text-lg lg:text-base text-customBlack-300 tracking-widest pt-10">
              New Arrival
            </h2>
            <h1 className=" font-poppins font-bold text-md md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-customYellow-900 mt-3 md:leading-snug">
              Discover Our <br /> New Collection
            </h1>
            <p className="font-poppins font-medium text-xs md:text-base lg:text-lg text-customBlack-300 mt-2 md:mb-5 lg:mb-70 xl:mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="font-poppins font-bold text-xs md:text-base bg-customYellow-900 text-white px-10 py-4 mt-10 md:mt-16 md:px-5 md:py-3 md:mb-9 lg:mt-4 lg:px-16 lg:py-5 xl:mb-10">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
