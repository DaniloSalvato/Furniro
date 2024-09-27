import { useState } from "react";
import { Link } from "react-router-dom";

import { formatRupiah, totalAmount } from "../../../utils/utils";

import CartIcon from "../../../assets/icons/cart.svg";
import Cart from "../../../pages/Cart/Components/Cart";
import BagIcon from "../../../assets/icons/bag.svg";
import { useAppSelector } from "../../../stores";
import { ItemType } from "../../../stores/slices/Items/type";

const UserCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const items = useAppSelector((state) => state.cart.items);

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <img
        className="flex size-6 cursor-pointer transform transition-transform duration-200 hover:scale-105"
        src={CartIcon}
        alt="cart-icon"
        onClick={handleCartOpen}
      />

      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={handleCartOpen}
          ></div>
          <div className="absolute w-cartW right-0 top-0 bg-customBeije-150 px-4 z-50 max-w-[320px] md:max-w-full">
            <div className="flex w-full py-4 justify-center items-center border-b border-b-customBlack-950">
              <h2 className="w-full font-poppins font-semibold text-2xl ">
                Shopping Cart
              </h2>
              <img
                className=" transform transition-transform duration-200 hover:scale-105 cursor-pointer"
                src={BagIcon}
                alt="bag-icon"
                onClick={handleCartOpen}
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4 mb-5 pb-5 ">
              {items.length > 0 ? (
                items.map((item: ItemType) => <Cart key={item.id} {...item} />)
              ) : (
                <p className="text-gray-500">Your cart is empty.</p>
              )}
            </div>

            <div className="flex my-4">
              <p className="font-poppins font-normal text-base text-black ">
                Subtotal
              </p>

              <p className="font-poppins font-semibold text-base text-customYellow-900 ml-32">
                {formatRupiah(totalAmount(items))}
              </p>
            </div>

            <div className="flex w-full justify-between border-t border-customBlack-950 py-[26px]">
              <Link to={"cart"}>
                <button className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-[6px] px-4 md:px-[30px] rounded-full transform transition-transform duration-200 hover:scale-105" onClick={handleCartOpen}>
                  Cart
                </button>
              </Link>
              <Link to={"checkout"}>
                <button className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-[6px] px-4 md:px-[30px] rounded-full transform transition-transform duration-200 hover:scale-105" onClick={handleCartOpen}>
                  Checkout
                </button>
              </Link>

              <button className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-[6px] px-4 md:px-[30px] rounded-full transform transition-transform duration-200 hover:scale-105" onClick={handleCartOpen}>
                Comparison
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserCart;
