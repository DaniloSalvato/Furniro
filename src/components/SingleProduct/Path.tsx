interface PathProps {
  title: string;
}

const Path = ({ title }: PathProps) => {
  return (
    <div className="w-full flex font-poppins font-normal text-base py-8 justify-center items-center bg-customBeije-500 text-customBlack-800">
      <div className="w-4/5 flex">
        <p>Home</p>
        <img
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/arrow-right.svg"
          alt="arrow"
        />
        <p>Shop</p>
        <img
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/arrow-right.svg"
          alt="arrow"
        />
        <div className="pl-5 ml-5 text-black border-l border-l-black">{title}</div>
      </div>
    </div>
  );
};

export default Path;
