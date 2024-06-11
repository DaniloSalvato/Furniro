const Discover = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        src="https://furniro-ds.s3.us-east-2.amazonaws.com/utils/home-img.png"
        alt="home-img"
      />
      <div className="absolute flex w-full h-full top-0 left-0">

        <div className="hidden md:flex md:flex-1"></div>

        <div className="flex flex-1 w-full h-full items-center justify-center">
          
          <div className="bg-customYellow-100 w-4/5 md:w-5/6 md:h-5/6 lg:h-3/4 xl:h-2/3 2xl:h-2/4 px-2 md:px-5 lg:px-10 lg:mx-7 rounded-lg">
            <h2 className="font-poppins font-semibold text-xs md:text-lg lg:text-base text-customBlack-300 tracking-widest pt-4 md:pt-8 md:pb-2 lg:pt-10 xl:pt-12 xl:pb-4">
              New Arrival
            </h2>
            <h1 className="font-poppins font-bold text-md md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-customYellow-900 mb-1 md:mb-3">
              Discover Our New Collection
            </h1>
            <p className="font-poppins font-medium text-xs md:text-base lg:text-lg text-customBlack-300 mb-2 md:mb-5 lg:mb-70 xl:mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="font-poppins font-bold text-xs md:text-base bg-customYellow-900 text-white px-4 py-2 mb-2 md:px-5 md:py-3 md:mb-9 lg:px-16 lg:py-5 xl:mb-10">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
