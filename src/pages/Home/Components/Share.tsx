import background from "../../../assets/utils/backgroud-share.png"

const Share = () => {
  return (
    <>
      <div className="relative flex h-full w-full justify-center items-center mt-40 pb-10 border-b border-customBlack-800">
        <img
          className=" h-full w-full bg-auto bg-no-repeat bg-center"
          src={background}
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
