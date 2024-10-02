import { removeFromCart } from "../../../stores/slices/Cart";
import { useAppDispatch } from "../../../stores";
import { ItemType } from "../../../stores/slices/Items/type";

import removeIcon from "../../../assets/icons/x.svg";

const Cart = ({ ...props }: ItemType) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex w-4/5 py-6 ml-4 justify-between items-center">
      <img
        src={props.image}
        alt={props.title}
        className="w-20 h-20 object-cover mr-2 rounded-md"
      />

      <div className="flex flex-col justify-center items-start">
        <h1>{props.title}</h1>
        <div className="flex justify-center items-center gap-4">
          <p className="font-poppins font-light text-base text-black">
            {props.quantity}
          </p>
          <p className="font-poppins font-light text-xs text-black">X</p>
          <p className="font-poppins font-medium text-xs text-customYellow-900">
            Rp{(props.value * props.quantity).toFixed(2)}
          </p>
        </div>
      </div>

      <div>
        <button onClick={() => dispatch(removeFromCart({ id: props.id }))}>
          <img src={removeIcon} alt="remover-icon" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
