import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Item } from "../../types/Item";
import { addItemToCart } from "../../redux/thunks/cart";
import { formatRupiah } from "../../utils/utils";
import { useState } from "react";
 
const Card = ({
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
  const [isDisable, setIsDisable] = useState(false);
  const dispatch = useDispatch();
 
  const handleAddToCart = () => {
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
    dispatch(addItemToCart(item));
  };
 
  return (
    <section className="mx-auto w-fit group">
      <div className="relative max-w-72 max-h-card mb-7 overflow-hidden">
        <img className=" w-full" src={image} alt="image" />
        {/* define item novo */}
        <div className="absolute top-5 right-5">
          {isNew && (
            <div className="h-12 w-12 bg-customGreen-500 rounded-full  flex items-center justify-center">
              <p className="text-white ">New</p>
            </div>
          )}
        </div>
 
        {/* define item em promoção  */}
        <div className="absolute top-5 right-5">
          {inSale && (
            <div className="h-12 w-12 bg-customRed-500 rounded-full  flex items-center justify-center">
              <p className="text-white ">-{percentage}%</p>
            </div>
          )}
        </div>
 
        {/* detalhes item  */}
        <div className="bg-customWhite-50 pt-3 pb-5 px-5">
          <h2 className="text-xl font-semibold text-customBlack-500">
            {title}
          </h2>
 
          <p className="text-gray-600 mt-2">{subtitle}</p>
 
          <div>
            {inSale ? (
              <div className="flex gap-4 mt-2">
                <p className="font-poppins font-semibold text-xl text-customBlack-500">
                  {formatRupiah(value * (1 - percentage / 100))}
                </p>
                <p className="font-poppins font-regular text-base text-customWhite-100 line-through">
                  {formatRupiah(value)}
                </p>
              </div>
            ) : (
              <p className="font-poppins font-semibold text-xl text-customBlack-500 mt-2">
                {formatRupiah(value)}
              </p>
            )}
          </div>
        </div>
        {isDisable ? (
          <>
            {/* hover */}
            <div className="absolute flex flex-col inset-0 justify-center items-center hover:bg-black/70 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 ">
              <button
                className="bg-white text-customYellow-900 px-5 py-2 border border-black z-50 hover:bg-customYellow-900 hover:text-white transform transition-transform duration-200 hover:scale-105"
                onClick={handleAddToCart}
                onMouseOver={() => setIsDisable(true)}
                onMouseOut={() => setIsDisable(false)}
              >
                Add to cart
              </button>
              <div className="flex mt-6">
                <div className="flex cursor-pointer">
                  <img
                    src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/share.svg"
                    alt="Share-icon"
                  />
                  <p className="text-white ml-1 cursor-pointer">Share</p>
                </div>
                <div className="flex ml-3 cursor-pointer">
                  <img
                    src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/compare.svg"
                    alt="Compare-icon"
                  />
                  <p className="text-white ml-1 cursor-pointer">Compare</p>
                </div>
                <div className="flex ml-3 cursor-pointer">
                  <img
                    src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/like.svg"
                    alt="Like-icon"
                  />
                  <p className="text-white ml-1 cursor-pointer">Like</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to={`/product/${id}`}>
              {/* hover */}
              <div className="absolute flex flex-col inset-0 justify-center items-center hover:bg-black/70 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 ">
                <button
                  className="bg-white text-customYellow-900 px-5 py-2 border border-black z-50"
                  onClick={handleAddToCart}
                  onMouseOver={() => setIsDisable(true)}
                  onMouseOut={() => setIsDisable(false)}
                >
                  Add to cart
                </button>
                <div className="flex mt-6">
                  <div className="flex cursor-pointer">
                    <img
                      src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/share.svg"
                      alt="Share-icon"
                    />
                    <p className="text-white ml-1 cursor-pointer">Share</p>
                  </div>
                  <div className="flex ml-3 cursor-pointer">
                    <img
                      src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/compare.svg"
                      alt="Compare-icon"
                    />
                    <p className="text-white ml-1 cursor-pointer">Compare</p>
                  </div>
                  <div className="flex ml-3 cursor-pointer">
                    <img
                      src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/like.svg"
                      alt="Like-icon"
                    />
                    <p className="text-white ml-1 cursor-pointer">Like</p>
                  </div>
                </div>
              </div>
            </Link>
          </>
        )}
      </div>
    </section>
  );
};
 
export default Card;