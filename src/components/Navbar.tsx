import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navBarExpanded, setNavBarExpanded] = useState<boolean>(false);

  useEffect(() => {
    function monitorScreenSize() {
      if (window.screen.width > 768) {
        setNavBarExpanded(false);
      }
    }

    monitorScreenSize();
    window.addEventListener("load", monitorScreenSize);
    window.addEventListener("resize", monitorScreenSize);
  }, [navBarExpanded]);

  const handleMenuBtnClick = () => {
    setNavBarExpanded((prevState) => !prevState);
  };

  const shownMenuClasses =
    "aria-expanded:block aria-expanded:absolute aria-expanded:right-0 aria-expanded:top-20 aria-expanded:w-full";

  return (
    <header className="flex items-center justify-between w-full px-3 md:px-6 md:pr-24 py-4 font-poppins text-black font-medium">
      <div className="flex flex-">
        <img
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/utils/logo.svg"
          alt="plantPeace logo"
        />
        <h1 className="font-montserrat font-bold text-4.5xl">Furniro</h1>
      </div>
      
        <nav
          id="navbar"
          aria-expanded={navBarExpanded}
          className={`hidden md:block z-50 ${
            navBarExpanded && shownMenuClasses
          }`}
        >
          <ul
            id="navbar-menu"
            aria-expanded={navBarExpanded}
            className="flex aria-expanded:flex-col aria-expanded:items-end aria-expanded:mr-4 items-center gap-16 *:text-customLunarGreen hover:*:text-customAvocado"
          >
            <li>
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="md:hidden">
            <div className="flex gap-8">
            <img
            className="cursor-pointer"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/profile.svg"
              alt="profile-icon"
            />
            <img
            className="cursor-pointer"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/cart.svg"
              alt="cart-icon"
            />
          </div>
          </li>
          </ul>
        </nav>

        <div className="hidden gap-8 md:flex">
            <img className="cursor-pointer"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/profile.svg"
              alt="profile-icon"
            />
            <img
            className="cursor-pointer"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/cart.svg"
              alt="cart-icon"
            />
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
