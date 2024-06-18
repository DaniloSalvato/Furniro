
import NumberInputComponent from "../GenericComponents/NumberInput";
import { useDispatch } from "react-redux";
import { removeItemFromCart, updateItemCart } from "../../redux/thunks/cart";
import { formatRupiah } from "../../utils/utils";
import { RootState } from "../../redux/reducers";
import { useSelector } from "react-redux";

const CartItems = () => {
  const {cartItems} = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const handleUpdateCart = (id: number, quantity: number) => {
    dispatch(updateItemCart(id, quantity));
  };

  return (
    <>
      <div className="grid grid-cols-5 w-full items-center justify-center bg-customBeije-500">
        <p className="col-span-1 col-start-2 justify-items-end py-3 font-poppins font-medium text-base bg-customBeije-500 m-2">
          Product
        </p>
        <p className="col-span-1 col-start-3 py-3 font-poppins font-medium text-base bg-customBeije-500 mx-4">
          Price
        </p>
        <p className="col-span-1 col-start-4 py-3 font-poppins font-medium text-base bg-customBeije-500 mx-5">
          Quantity
        </p>
        <p className="col-span-1 col-start-5 py-3 font-poppins font-medium text-base bg-customBeije-500 mx-5">
          Subtotal
        </p>
        <p className="col-span-1 col-start-6 py-3 text-center text-transparent bg-customBeije-500 mx-6">
          trash
        </p>
      </div>

      <div className="grid grid-cols-5 w-full items-center justify-center">
        {cartItems.map((item) => (
          <>
            <img key={item.id}
              className="col-span-1 col-start-1 w-20 h-20 rounded-lg m-2"
              src={item.image}
              alt={item.title}
            />

            <p className="col-start-2 font-normal text-base text-customBlack-800 m-2">
              {item.title}
            </p>

            <p className="col-start-3 font-poppins font-normal text-base text-customBlack-800 m-2">
              {formatRupiah(item.value)}
            </p>

            <p className="col-start-4 m-2">
              <NumberInputComponent
                id={item.id}
                quantity={item.quantity}
                handleUpdateCart={handleUpdateCart}
              />
            </p>

            <p className="col-start-5 m-2">
              {formatRupiah(item.value * item.quantity)}
            </p>

            <img 
              onClick={() => dispatch(removeItemFromCart(item.id))}
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/trash.svg"
              alt="trash"
              className="col-start-6 h-5 w-5 m-6"
            />
          </>
        ))}
      </div>
    </>
  );
};

export default CartItems;
