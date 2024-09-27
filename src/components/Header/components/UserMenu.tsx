import ProfileIcon from "../../../assets/icons/profile.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../../Auth/firebase";
import { useAppDispatch, useAppSelector } from "../../../stores";
import { logoutUser } from "../../../stores/slices/Users";

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const {user} = useAppSelector((state) => state.user);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    Logout();
    dispatch(logoutUser())
    navigate("/home");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>

      <img
        className="block size-6 cursor-pointer transform transition-transform duration-200 hover:scale-105 rounded-full"
        src={user?.photoURL || ProfileIcon}
        alt="profile-icon"
        onClick={handleOpenMenu}
      />

      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={handleOpenMenu}></div>
          <div className="absolute w-20 right-44 top-16 text-white bg-customYellow-900 px-2 py-3 z-50 rounded-t">
            <button onClick={handleLogout} className="font-poppins text-center">
              Logout
            </button>
          </div>
          <div className="absolute w-20 right-44 top-28 text-white bg-customYellow-900 px-2 py-3 z-50 rounded-b">
            <button onClick={handleLogin} className="font-poppins text-center">
              Login
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default UserMenu;
