import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState } from "../redux/store";
import Cart from "./CartComponents/Cart";

const Navbar = () => {
  const [navBarExpanded, setNavBarExpanded] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.value * item.quantity;
  }, 0);

  const handleMenuBtnClick = () => {
    setNavBarExpanded((prevState) => !prevState);
  };

  const handleCartClick = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <header className="flex items-center justify-between w-full px-3 md:px-6 md:pr-24 py-4 font-poppins text-black font-medium">
      <div className="flex items-center">
        <img
          className="mr-2"
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/utils/logo.svg"
          alt="Furniro logo"
        />
        <h1 className="font-montserrat font-bold text-4.5xl">Furniro</h1>
      </div>

      <nav
        className={`${
          navBarExpanded ? "block" : "hidden"
        } text-center md:flex md:items-center md:w-auto w-full absolute md:relative top-16 md:top-0 left-0 md:left-auto z-50 md:z-10 bg-customYellow-900 md:bg-transparent md:text-black text-black`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:gap-8 gap-4 p-4 md:p-0">
          <li>
            <NavLink
              className="nav-link"
              to="/home"
              onClick={handleMenuBtnClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/shop"
              onClick={handleMenuBtnClick}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/about"
              onClick={handleMenuBtnClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/contact"
              onClick={handleMenuBtnClick}
            >
              Contact
            </NavLink>
          </li>

          <li className="flex gap-4 md:hidden justify-center items-center z-50 text-black">
            <img
              className="cursor-pointer"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/profile.svg"
              alt="profile-icon"
            />
            <img
              className="cursor-pointer"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/cart.svg"
              alt="cart-icon"
              onClick={handleCartClick}
            />
          </li>
        </ul>
      </nav>

      <div className="hidden gap-8 md:flex">
        <img
          className="cursor-pointer"
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/profile.svg"
          alt="profile-icon"
        />
        <img
          className="cursor-pointer"
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/cart.svg"
          alt="cart-icon"
          onClick={handleCartClick}
        />
        {isCartOpen && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={handleCartClick}
            ></div>
            <div className="absolute w-cartW right-0 top-0 bg-customBeije-150 p-4 z-50">
              <div className="flex justify-center items- mt-4 mb-5 pb-5 ml-2 border-b border-b-customBlack-950">
                <h2 className="w-4/5 font-poppins font-semibold text-2xl  ">
                  Shopping Cart
                </h2>
                <img
                  src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/bag.svg"
                  alt="bag-icon"
                  onClick={handleCartClick}
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-4 mb-5 pb-5 ">
                {cartItems.map((item) => (
                  <Cart
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    value={item.value}
                    quantity={item.quantity}
                  />
                ))}
              </div>

              <div className="flex mt-4 mx-2 ">
                <p className="font-poppins font-normal text-base text-black">
                  Subtotal
                </p>

                <p className="font-poppins font-semibold text-base text-customYellow-900 ml-32">
                  ${totalAmount}
                </p>
              </div>

              <div className="flex mt-4 mx-2 justify-between">
                <Link to={"cart"}>
                  <button onClick={handleCartClick} className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-1 px-8 rounded-full">
                    Cart
                  </button>
                </Link>
                <Link to={"checkout"}>
                  <button onClick={handleCartClick} className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-1 px-8 rounded-full">
                    Checkout
                  </button>
                </Link>

                <button onClick={handleCartClick} className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-1 px-8 rounded-full">
                  Comparison
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <button className="inline-block md:hidden" onClick={handleMenuBtnClick}>
        <img
          src={
            navBarExpanded
              ? "https://furniro-ds.s3.us-east-2.amazonaws.com/utils/close-btn.svg"
              : "https://furniro-ds.s3.us-east-2.amazonaws.com/utils/burger-btn.svg"
          }
          alt="Burguer menu icon and cross mark when expanded"
        />
      </button>
    </header>
  );
};

export default Navbar;
