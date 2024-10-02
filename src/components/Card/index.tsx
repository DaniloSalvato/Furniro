import { Link } from "react-router-dom";
import { formatRupiah } from "../../utils/utils";
// import { useState } from "react";
import { addToCart } from "../../stores/slices/Cart";
import { useAppDispatch } from "../../stores";
import { ItemType } from "../../stores/slices/Items/type";

import shareIcon from "../../assets/icons/share.svg";
import compareIcon from "../../assets/icons/compare.svg";
import likeIcon from "../../assets/icons/like.svg";
import IsNew from "./Icon/IsNew";
import IsSale from "./Icon/IsSale";
import { MouseEvent } from "react";

const Card = (props: ItemType) => {
  const dispatch = useAppDispatch();

  const item = {
    ...props,
  };

  const handleAddToCart = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToCart(item));
  };

  return (
    <article className="mx-auto w-fit group">
      <div className="relative max-w-72 max-h-card mb-7 overflow-hidden">
        <img className=" w-full" src={props.image} alt="image" />

        {props.isNew && <IsNew>New</IsNew>}

        {props.inSale && <IsSale>-{props.percentage}%</IsSale>}

        {/* detalhes item  */}
        <div className="bg-customWhite-50 pt-3 pb-5 px-5">
          <h2 className="text-xl font-semibold text-customBlack-500">
            {props.title}
          </h2>

          <h3 className="text-gray-600 mt-2">{props.subtitle}</h3>

          <div className="flex gap-4 mt-2">
            <span className="font-poppins font-semibold text-xl text-customBlack-500">
              {props.inSale
                ? formatRupiah(props.value * (1 - props.percentage / 100))
                : formatRupiah(props.value)}
            </span>
            {props.inSale && (
              <span className="font-poppins font-regular text-base text-customWhite-100 line-through">
                {formatRupiah(props.value)}
              </span>
            )}
          </div>
        </div>
            <Link to={`/product/${props.id}`}>
              {/* hover */}
              <div className="absolute flex flex-col inset-0 justify-center items-center hover:bg-black/70 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 ">
                <button
                  className="bg-white text-customYellow-900 px-5 py-2 border border-black z-50 hover:text-white hover:bg-customYellow-900"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                <div className="flex mt-6">
                  <div className="flex cursor-pointer">
                    <img src={shareIcon} alt="Share-icon" />
                    <p className="text-white ml-1 cursor-pointer">Share</p>
                  </div>
                  <div className="flex ml-3 cursor-pointer">
                    <img src={compareIcon} alt="Compare-icon" />
                    <p className="text-white ml-1 cursor-pointer">Compare</p>
                  </div>
                  <div className="flex ml-3 cursor-pointer">
                    <img src={likeIcon} alt="Like-icon" />
                    <p className="text-white ml-1 cursor-pointer">Like</p>
                  </div>
                </div>
              </div>
            </Link>
      </div>
    </article>
  );
};

export default Card;
