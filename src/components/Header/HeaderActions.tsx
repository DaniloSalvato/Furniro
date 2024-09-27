import UserMenu from "./components/UserMenu";
import UserCart from "./components/UserCart";

const HeaderActions = () => {
  return (
    <div className="flex gap-3 sm:gap-9 justify-center items-center">
      <UserMenu />
      <UserCart />
    </div>
  );
};

export default HeaderActions;
