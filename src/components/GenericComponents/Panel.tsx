import { Page } from "../../types/Page";

const Panel = ({ page }: Page) => {
  return (
    <>
      <div className="relative ">
        <img
          className="w-full h-auto bg-cover bg-center bg-no-repeat blur-xs"
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/utils/process-image.png"
          alt="panel"
        />
        <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center bg-white bg-opacity-50 text-black">
          <div>
            <h1 className="font-poppins font-medium text-5xl mb-2">Shop</h1>
          </div>
          <div>
            <span className="font-poppins font-medium text-base">
              Home{" > "}
            </span>
            <span className="font-poppins font-light text-base">{page}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
