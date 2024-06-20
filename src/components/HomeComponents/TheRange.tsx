const TheRange = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col my-10">
        <h1 className="font-poppins font-bold text-lg md:text-4xl text-center text-customBlack-300 mb-1">Browse The Range</h1>
        <p className="font-poppins font-regular text-sm md:text-xl text-center text-customBlack-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-3 gap-7 w-11/12 ">
        <div className="flex flex-col">
          <img className="rounded-lg transition-transform duration-200 hover:scale-105" src="https://furniro-ds.s3.us-east-2.amazonaws.com/categories/category-1.png" alt="Dining-image" />
          <h1 className="font-poppins font-semibold text-xs mt-3 md:text-2xl text-center text-customBlack-300">Dining</h1>
        </div>
        <div className="flex flex-col">
          <img className="rounded-lg transition-transform duration-200 hover:scale-105" src="https://furniro-ds.s3.us-east-2.amazonaws.com/categories/category-2.png" alt="Living-image" />
          <h1 className="font-poppins font-semibold text-xs mt-3 md:text-2xl text-center text-customBlack-300">Living</h1>
        </div>
        <div className="flex flex-col">
          <img className="rounded-lg transition-transform duration-200 hover:scale-105" src="https://furniro-ds.s3.us-east-2.amazonaws.com/categories/category-3.png" alt="Bedroom-image" />
          <h1 className="font-poppins font-semibold text-xs mt-3 md:text-2xl text-center text-customBlack-300">Bedroom</h1>
        </div>
      </div>
    </div>
  );
};

export default TheRange;
