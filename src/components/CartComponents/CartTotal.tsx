import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/reducers";
import { formatRupiah, totalAmount } from "../../utils/utils";

const CartTotal = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <div className="flex w-full flex-col justify-center items-center pt-4 pb-12 bg-customBeije-500">
      <h1 className="font-poppins font-semibold text-3xl">Cart Total</h1>

      <div className="flex w-full flex-col mt-16">
        <div className="flex justify-evenly items-start flex-wrap">
          <p className="font-poppins font-medium text-base ">Subtotal</p>

          <div className="flex flex-col items-end">
            {cartItems.map((item) => (
              <p
                key={item.id}
                className="flex font-poppins font-normal text-base text-customBlack-800"
              >
                {formatRupiah(item.value * item.quantity)}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-evenly items-center mt-4 flex-wrap">
          <p className="font-poppins font-medium text-base">Total</p>
          <p className="font-poppins font-medium text-xl text-customYellow-900">
            {formatRupiah(totalAmount(cartItems))}
          </p>
        </div>
      </div>
      <Link to={"/checkout"}>
        <button className="font-poppins font-normal text-xl py-2 mt-10 mb-8 px-8 my-4 border border-black rounded-lg hover:bg-white hover:text-customYellow-900 transform transition-transform duration-200 hover:scale-105">
          Check Out
        </button>
      </Link>
    </div>
  );
};

export default CartTotal;
