
import { removeProduct } from "../../redux/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { CartProps } from "../../types/Cart";

const Cart = ({ id, title, image, value, quantity }: CartProps) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="flex w-4/5 py-6 ml-4 justify-between items-center">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-cover mr-2 rounded-md"
      />

      <div className="flex flex-col justify-center items-start">
        <h1>{title}</h1>
        <div className="flex justify-center items-center gap-4">
          <p className="font-poppins font-light text-base text-black">
            {quantity}
          </p>
          <p className="font-poppins font-light text-xs text-black">X</p>
          <p className="font-poppins font-medium text-xs text-customYellow-900">
            ${(value * quantity).toFixed(2)}
          </p>
        </div>
      </div>

      <div>
        <button onClick={() => dispatch(removeProduct(id))}>
          <img
            src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/x.svg"
            alt="remover-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Cart;
