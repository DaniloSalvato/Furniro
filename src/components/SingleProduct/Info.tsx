import { useState } from "react";
import { useDispatch } from "react-redux";
import { Item } from "../../types/Item";
import { updateItemCart } from "../../redux/thunks/cart";
import { formatRupiah } from "../../utils/utils";
import NumberInput from "../GenericComponents/NumberInput";
import Star from "./Star";

const Info = ({
  id,
  title,
  about,
  star,
  value,
  sku,
  category,
  tags,
  quantity,
}: Item) => {
  const [newQuantity, setNewQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleUpdateCart = (id: number, quantity: number) => {
    dispatch(updateItemCart(id, quantity));
  };

  return (
    <div className="flex w-4/5 h-full flex-col">
      <h1 className="font-poppins font-normal text-4xl mt-11">{title}</h1>
      <p className="font-poppins font-medium text-2xl text-customBlack-800 mt-3">
        {formatRupiah(value)}
      </p>
      <div className="flex mt-3">
        <Star stars={star} />
        <p className="font-poppins font-normal text-sm text-customBlack-800 ml-5">
          Customer Review
        </p>
      </div>
      <p className="font-poppins font-normal text-sm text-black mt-3">
        {about}
      </p>
      <p className="font-poppins font-normal text-sm text-customBlack-800 mt-6">
        Size
      </p>
      <div className="flex gap-3 mt-4">
        <p className="flex h-8 w-8 justify-center items-center text-white bg-customYellow-900 rounded-md">
          L
        </p>
        <p className="flex h-8 w-8 justify-center items-center">XL</p>
        <p className="flex h-8 w-8 justify-center items-center">XS</p>
      </div>
      <p className="font-poppins font-normal text-sm text-customBlack-800 mt-4">
        Color
      </p>
      <div className="flex gap-3 mt-4">
        <div className="h-8 w-8 bg-customPurple-500 rounded-full"></div>
        <div className="h-8 w-8 bg-black rounded-full"></div>
        <div className="h-8 w-8 bg-customYellow-900 rounded-full"></div>
      </div>
      <div className="flex mt-4">
        <NumberInput
          id={id}
          quantity={quantity}
        />

        <button
          className=" ml-4 py-1 px-8 border border-black rounded-lg"
          onClick={() => handleUpdateCart(id, 4)}
        >
          Add To Cart
        </button>
      </div>
      <div className="">
        <div className="flex gap-4 mt-4 font-poppins font-normal text-sm text-customBlack-800">
          <div>
            <div>SKU</div>
            <div>Category</div>
            <div>Tags</div>
            <div>Share</div>
          </div>
          <div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
          </div>
          <div>
            <div>{sku}</div>
            <div>{category}</div>
            <div>{tags.join(", ")}</div>
            <div>info</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
