import { Link } from 'react-router-dom'

import LogoIcon from "../../assets/utils/logo.svg"

const Logo = () => {
  return (
    <Link to={"/home"}>
        <div className="flex items-center gap-2 transform transition-transform duration-200 hover:scale-105 cursor-pointer z-50">
          <img
            className="size-10"
            src={LogoIcon}
            alt="Furniro logo"
          />
          <h1 className="font-montserrat font-bold text-xl md:text-4.5xl">Furniro</h1>
        </div>
      </Link>
  )
}

export default Logo