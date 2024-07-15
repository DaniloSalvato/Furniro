import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Item } from "../types/Item";

import Cart from "./CartComponents/Cart";
import { formatRupiah, totalAmount } from "../utils/utils";
import { Logout } from "../Auth/firebase";

const Navbar = () => {
  const [navBarExpanded, setNavBarExpanded] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLogginOutOpen, setIsLogginOutOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const navigate = useNavigate();

  const { cartItems } = useSelector((state: RootState) => state.cart);

  const handleLogout = () => {
    Logout();
    localStorage.removeItem("user");
    navigate("/home");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogoutBtnClick = () => {
    setIsLogginOutOpen((prevState) => !prevState);
  };

  const handleMenuBtnClick = () => {
    setNavBarExpanded((prevState) => !prevState);
  };

  const handleCartClick = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <header className="flex items-center justify-between w-full px-3 md:px-6 md:pr-24 py-4 font-poppins text-black font-medium">
      {/* logo */}
      <Link to={"/home"}>
        <div className="flex items-center transform transition-transform duration-200 hover:scale-105 cursor-pointer">
          <img
            className="mr-2"
            src="https://furniro-ds.s3.us-east-2.amazonaws.com/utils/logo.svg"
            alt="Furniro logo"
          />
          <h1 className="font-montserrat font-bold text-4.5xl">Furniro</h1>
        </div>
      </Link>

      {/* navegação */}
      <nav
        className={`${
          navBarExpanded ? "block" : "hidden"
        } text-center md:flex md:items-center md:w-auto w-1/2 absolute md:relative top-20 md:top-0 right-0 md:left-auto z-40 md:z-10 bg-customYellow-100 md:bg-transparent md:text-black text-black`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-20 gap-4 p-4 md:p-0">
          <li className="transform transition-transform duration-200 hover:scale-105">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="transform transition-transform duration-200 hover:scale-105">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="transform transition-transform duration-200 hover:scale-105">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="transform transition-transform duration-200 hover:scale-105">
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li className="flex gap-4 md:hidden justify-center items-center">
            {user.img ? (
              <img
                onClick={handleLogoutBtnClick}
                className="size-8 rounded-full cursor-pointer transform transition-transform duration-200 hover:scale-105"
                src={user.img}
                alt="profile-icon"
              />
            ) : (
              <img
                onClick={handleLogoutBtnClick}
                className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
                src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/profile.svg"
                alt="profile-icon"
              />
            )}

            {isLogginOutOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={handleLogoutBtnClick}
                ></div>
                <div className="absolute w-20 right-44 top-16 text-white bg-customYellow-900 px-2 py-3 z-50 rounded-t">
                  <button
                    onClick={handleLogout}
                    className="font-poppins text-center"
                  >
                    Logout
                  </button>
                </div>
                <div className="absolute w-20 right-44 top-28 text-white bg-customYellow-900 px-2 py-3 z-50 rounded-b">
                  <button
                    onClick={handleLogin}
                    className="font-poppins text-center"
                  >
                    Login
                  </button>
                </div>
              </>
            )}

            <NavLink to={"/cart"}>
              <img
                className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
                src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/cart.svg"
                alt="cart-icon"
              />
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* cart */}
      <div className="hidden gap-8 md:flex justify-center items-center">
        {user.name && <div className="hidden lg:flex">{user.name}</div>}
        {user.img ? (
          <img
            onClick={handleLogoutBtnClick}
            className="size-8 rounded-full cursor-pointer transform transition-transform duration-200 hover:scale-105"
            src={user.img}
            alt="profile-icon"
          />
        ) : (
          <img
            onClick={handleLogoutBtnClick}
            className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
            src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/profile.svg"
            alt="profile-icon"
          />
        )}
        <img
          className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
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
              <div className="flex justify-center items-center mt-4 mb-5 pb-5 ml-2 ">
                <h2 className="w-4/5 pb-4 font-poppins font-semibold text-2xl  border-b border-b-customBlack-950">
                  Shopping Cart
                </h2>
                <img
                  className="pb-4 transform transition-transform duration-200 hover:scale-105 cursor-pointer"
                  src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/bag.svg"
                  alt="bag-icon"
                  onClick={handleCartClick}
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-4 mb-5 pb-5 ">
                {cartItems ? (
                  cartItems.map((item: Item) => (
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
                  {formatRupiah(totalAmount(cartItems))}
                </p>
              </div>

              <div className="flex mt-4 mx-2 pt-4 justify-between border-t border-customBlack-950">
                <Link to={"cart"}>
                  <button
                    onClick={handleCartClick}
                    className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-1 px-8 rounded-full transform transition-transform duration-200 hover:scale-105"
                  >
                    Cart
                  </button>
                </Link>
                <Link to={"checkout"}>
                  <button
                    onClick={handleCartClick}
                    className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-1 px-8 rounded-full transform transition-transform duration-200 hover:scale-105"
                  >
                    Checkout
                  </button>
                </Link>

                <button
                  onClick={handleCartClick}
                  className="font-poppins font-normal text-xs bg-customBeije-150 text-black border border-black py-1 px-8 rounded-full transform transition-transform duration-200 hover:scale-105"
                >
                  Comparison
                </button>
              </div>
            </div>
          </>
        )}
        {isLogginOutOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={handleLogoutBtnClick}
            ></div>
            <div className="absolute w-20 right-44 top-16 text-white bg-customYellow-900 px-2 py-3 z-50 rounded-t">
              <button
                onClick={handleLogout}
                className="font-poppins text-center"
              >
                Logout
              </button>
            </div>
            <div className="absolute w-20 right-44 top-28 text-white bg-customYellow-900 px-2 py-3 z-50 rounded-b">
              <button
                onClick={handleLogin}
                className="font-poppins text-center"
              >
                Login
              </button>
            </div>
          </>
        )}
      </div>

      {/* burguer */}
      <button
        className="inline-block md:hidden transform transition-transform duration-200 hover:scale-105"
        onClick={handleMenuBtnClick}
      >
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
