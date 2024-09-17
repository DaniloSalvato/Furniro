import { useState } from "react";
import { Link } from 'react-router-dom';

import { formatRupiah, totalAmount } from '../../../utils/utils';

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
          <div className="absolute w-cartW right-0 top-0 bg-customBeije-150 p-4 z-50">
            <div className="flex justify-center items-center mt-4 mb-5 pb-5 ml-2 ">
              <h2 className="w-4/5 pb-4 font-poppins font-semibold text-2xl  border-b border-b-customBlack-950">
                Shopping Cart
              </h2>
              <img
                className="pb-4 transform transition-transform duration-200 hover:scale-105 cursor-pointer"
                src={BagIcon}
                alt="bag-icon"
                onClick={handleCartOpen}
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4 mb-5 pb-5 ">
              {items ? (
                items.map((item: ItemType) => (
                  <Cart
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    about={item.about}
                    description={item.description}
                    image={item.image}
                    star={item.star}
                    value={item.value}
                    inSale={item.inSale}
                    percentage={item.percentage}
                    isNew={item.isNew}
                    sku={item.sku}
                    category={item.category}
                    tags={item.tags}
                    quantity={item.quantity}
                  />
                ))
              ) : (
                <p className="text-gray-500">Your cart is empty</p>
              )}
            </div>

            <div className="flex mt-4 mx-2 ">
              <p className="font-poppins font-normal text-base text-black ">
                Subtotal
              </p>

              <p className="font-poppins font-semibold text-base text-customYellow-900 ml-32">
                {formatRupiah(totalAmount(items))}
              </p>
            </div>

            <div className="flex mt-4 mx-2 pt-4 justify-between border-t border-customBlack-950">
              <Link to={"cart"}>
              <button className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-1 px-8 rounded-full transform transition-transform duration-200 hover:scale-105">
                Cart
              </button>
              </Link>
              <Link to={"checkout"}>
              <button className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-1 px-8 rounded-full transform transition-transform duration-200 hover:scale-105">
                Checkout
              </button>
              </Link>

              <button className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-1 px-8 rounded-full transform transition-transform duration-200 hover:scale-105">
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
