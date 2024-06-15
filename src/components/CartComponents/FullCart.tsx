import { useSelector } from "react-redux";
import { RootState } from "../../types";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";


const FullCart = () => {
  const {cartItems} = useSelector((state: RootState) => state.cart);

  return (
    <div className="flex w-full justify-center items-center my-16 ">
      <div className="flex w-full justify-center flex-wrap gap-12">
        <div className="flex flex-col w-3/6 ">
            <CartItems cartItem={cartItems}/>
        </div>
        <div className="flex flex-col w-2/6 ">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default FullCart;
