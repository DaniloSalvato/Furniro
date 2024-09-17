import { Link } from "react-router-dom";

type NavbarProps = {
  isOpen: boolean;
  onClick: () => void;
};

const Navbar = ({ isOpen, onClick }: NavbarProps) => {
  return (
    <nav
      data-isopen={isOpen}
      className="
    hidden text-center bg-white text-black
    md:flex md:items-center md:justify-center
    data-[isopen=true]:absolute data-[isopen=true]:flex 
    data-[isopen=true]:items-center data-[isopen=true]:justify-center 
    data-[isOpen=true]:w-full 
    data-[isopen=true]:top-[83px] data-[isopen=true]:right-0
    data-[isopen=true]:bg-customYellow-100
    data-[isopen=true]:z-50
    "
    >
      <ul className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-20 gap-4 p-4 md:p-0">
        <li className="transform transition-transform duration-200 hover:scale-105">
          <Link onClick={onClick} to="/home">
            Home
          </Link>
        </li>
        <li className="transform transition-transform duration-200 hover:scale-105">
          <Link onClick={onClick} to="/shop">
            Shop
          </Link>
        </li>
        <li className="transform transition-transform duration-200 hover:scale-105">
          <Link onClick={onClick} to="/about">
            About
          </Link>
        </li>
        <li className="transform transition-transform duration-200 hover:scale-105">
          <Link onClick={onClick} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
