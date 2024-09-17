import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderActions from "./HeaderActions";
import { useState } from "react";

const Header = () => {
  const [toggleIsOpen, setToggleIsOpen] = useState(false);
  
  const handleToggleOpen = () => {
    setToggleIsOpen(!toggleIsOpen);
  };

  const handleToggleClose = () => {
    setToggleIsOpen(false);
  }

  return (
    <header className="flex items-center justify-between w-full px-3 md:px-6 md:pr-24 py-4 font-poppins text-black font-medium">
      <Logo />
      <Navbar isOpen={toggleIsOpen} onClick={handleToggleClose} />
      <HeaderActions />

      <button
        onClick={handleToggleOpen}
        className="relative flex flex-col w-8 gap-1.5 md:hidden"
      >
        <span
          data-isopen={toggleIsOpen}
          className="block w-full h-0.5 bg-slate-600 data-[isopen=true]:-rotate-[45deg] data-[isopen=true]:translate-y-[4.5px] transition-all"
        ></span>

        <span
          data-isopen={toggleIsOpen}
          className="block w-full h-0.5 bg-slate-600 data-[isopen=true]:hidden"
        ></span>

        <span
          data-isopen={toggleIsOpen}
          className="block w-full h-0.5 bg-slate-600 data-[isopen=true]:rotate-[45deg] data-[isopen=true]:-translate-y-[3px] transition-all"
        ></span>
      </button>
    </header>
  );
};

export default Header;
