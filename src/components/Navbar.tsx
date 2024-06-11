import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navBarExpanded, setNavBarExpanded] = useState<boolean>(false);
  const [userLogin, setUserLogin] = useState<boolean>(true);

  useEffect(() => {
    function monitorScreenSize() {
      if (window.screen.width > 768) {
        setUserLogin(true);
        setNavBarExpanded(false);
        setUserLogin(true);
      } else setUserLogin(false);
    }

    monitorScreenSize();
    window.addEventListener("load", monitorScreenSize);
    window.addEventListener("resize", monitorScreenSize);
  }, [userLogin, navBarExpanded]);

  const handleMenuBtnClick = () => {
    setNavBarExpanded((prevState) => !prevState);
  };

  const shownMenuClasses =
    "aria-expanded:block aria-expanded:absolute aria-expanded:right-0 aria-expanded:top-20 aria-expanded:bg-customWisper aria-expanded:w-full";

  return (
    <header className="flex items-center justify-between w-full px-3 md:px-6 md:pr-24 py-4">
      <div className="flex">
        <img
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/utils/logo.svg"
          alt="plantPeace logo"
        />
        <h1 className="font-montserrat font-bold text-4.5xl">Furniro</h1>
      </div>

      <div className="font-poppins text-black font-medium">
        <nav
          id="navbar"
          aria-expanded={navBarExpanded}
          className={`hidden md:block  z-50 ${
            navBarExpanded && shownMenuClasses
          }`}
        >
          <ul
            id="navbar-menu"
            aria-expanded={navBarExpanded}
            className="flex flex-row aria-expanded:flex-col aria-expanded:items-end aria-expanded:mr-4 items-center gap-6 *:text-customLunarGreen hover:*:text-customAvocado"
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
          </ul>
        </nav>
      </div>

      <div className="flex gap-8">
        <img
          src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/profile.svg"
          alt="profile-icon"
        />
        <img
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
