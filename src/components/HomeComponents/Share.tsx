const Share = () => {
  return (
    <>
      {/* <div className="flex w-full h-850 justify-center">
        <div className="w-2/5 bg-yellow-500">
          <div className="relative">
            <img
              className="absolute -left-10 top-20 h-20 w-30"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/grid/grid-1.png"
              alt=""
            />
            <img
              className="absolute left-5 top-28 h-10 w-20"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/grid/grid-2.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/5 bg-green-500">
          <div className="relative">
            <img
              className="absolute -left-10 top-20 h-20 w-30"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/grid/grid-1.png"
              alt=""
            />
           
          </div>
        </div>
        <div className="w-2/5 bg-blue-500">
          <div className="relative">
            <img
              className="absolute -left-10 top-20 h-20 w-30"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/grid/grid-1.png"
              alt=""
            />
            <img
              className="absolute left-5 top-28 h-10 w-20"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/grid/grid-2.png"
              alt=""
            />
          </div>
        </div>
      </div> */}
      <div className="relative flex h-full w-full justify-center items-center mt-40 pb-10 border-b border-customBlack-800">
        <img
          className=" h-full w-full bg-auto bg-no-repeat bg-center"
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/utils/Home-background2.jpg"
          alt="pictures"
        />
        <div className="absolute flex flex-col -top-11 text-center">
          <p className="font-poppins font-semibold text-xs md:text-xl mb-3 text-customBlack-550">Share your setup with</p>
          <p className="font-poppins font-bold text-xl md:text-4xl text-customBlack-500">#FuniroFurniture</p>
        </div>
      </div>
    </>
  );
};

export default Share;
