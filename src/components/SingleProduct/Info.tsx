import { Link } from "react-router-dom";
import { Item } from "../../types/Item";
import { formatRupiah } from "../../utils/utils";
import NumberInput from "../GenericComponents/NumberInput";
import Star from "./Star";

const Info = ({
  id,
  title,
  subtitle,
  description,
  about,
  image,
  star,
  value,
  inSale,
  percentage,
  isNew,
  sku,
  category,
  tags,
  quantity,
}: Item) => {
  const item = {
    id,
    title,
    subtitle,
    description,
    about,
    image,
    star,
    value,
    inSale,
    percentage,
    isNew,
    sku,
    category,
    tags,
    quantity,
  };

  return (
    <div className="flex w-4/5 h-full flex-col ml-10 mt-10 md:mt-3 lg:w-1/2 md:ml-20">
      <h1 className="font-poppins font-normal text-4xl ">{title}</h1>
      <p className="font-poppins font-medium text-2xl text-customBlack-800 mt-4">
        {formatRupiah(value)}
      </p>
      <div className="flex mt-4">
        <Star stars={star} />
        <p className="font-poppins font-normal text-sm text-customBlack-800 ml-2 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
          5 Customer Review
        </p>
      </div>
      <p className="font-poppins font-normal text-sm text-black mt-4">
        {description}
      </p>
      <p className="font-poppins font-normal text-sm text-customBlack-800 mt-6 ">
        Size
      </p>
      <div className="flex gap-3 mt-5">
        <p className="flex h-8 w-8 justify-center items-center text-white bg-customYellow-900 rounded-md transform transition-transform duration-200 hover:scale-105 cursor-pointer">
          L
        </p>
        <p className="flex h-8 w-8 justify-center items-center transform transition-transform duration-200 hover:scale-105 cursor-pointer">
          XL
        </p>
        <p className="flex h-8 w-8 justify-center items-center transform transition-transform duration-200 hover:scale-105 cursor-pointer">
          XS
        </p>
      </div>
      <p className="font-poppins font-normal text-sm text-customBlack-800 mt-5">
        Color
      </p>
      <div className="flex gap-3 mt-5">
        <div className="h-8 w-8 bg-customPurple-500 rounded-full transform transition-transform duration-200 hover:scale-105 cursor-pointer"></div>
        <div className="h-8 w-8 bg-black rounded-full transform transition-transform duration-200 hover:scale-105 cursor-pointer"></div>
        <div className="h-8 w-8 bg-customYellow-900 rounded-full transform transition-transform duration-200 hover:scale-105 cursor-pointer"></div>
      </div>
      <div className="flex mt-8">
        <NumberInput id={id} item={item} showButton />
      </div>
      <div className="">
        <div className="flex gap-4 mt-14 pt-10 font-poppins font-normal text-sm text-customBlack-800 border-t border-customBlack-800">
          <div className="flex flex-col gap-3">
            <div>SKU</div>
            <div>Category</div>
            <div>Tags</div>
            <div>Share</div>
          </div>
          <div className="flex flex-col gap-3">
            <div>:</div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
          </div>
          <div className="flex flex-col gap-3">
            <div>{sku}</div>
            <div>{category}</div>
            <div>{tags.join(", ")}</div>
            <div className="flex gap-4">
              <Link to="https://www.facebook.com/">
                <img
                  className="transform transition-transform duration-200 hover:scale-105 cursor-pointer"
                  src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/facebook-filled.svg"
                  alt="face-icon"
                />
              </Link>
              <Link to="https://www.linkedin.com">
                <img
                  className="transform transition-transform duration-200 hover:scale-105 cursor-pointer"
                  src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/linkedin-filled.svg"
                  alt="linkedin-icon"
                />
              </Link>
              <Link to="https://x.com/home?lang=pt-br">
                <img
                  className="transform transition-transform duration-200 hover:scale-105 cursor-pointer"
                  src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/twitter-filled.svg"
                  alt="twitter-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
