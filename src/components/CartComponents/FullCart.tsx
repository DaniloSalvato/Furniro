import { useSelector } from "react-redux";
import CartTotal from "./CartTotal";
import { RootState } from "../../redux/store";
import CartItems from "./CartItems";

const FullCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.value * item.quantity;
  }, 0);

  return (
    <div className="flex w-full justify-center items-center my-16 ">
      <div className="flex w-full justify-center flex-wrap gap-12">
        <div className="flex flex-col w-3/6 ">
            <CartItems cartItem={cartItems}/>
        </div>
        <div className="flex flex-col w-2/6 ">
          <CartTotal totalAmount={totalAmount} cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default FullCart;
