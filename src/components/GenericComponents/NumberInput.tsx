import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateItemCart } from "../../redux/thunks/cart";

interface NumberInputProps {
  id: number;
  quantity: number;
}

const NumberInput = ({ id, quantity }: NumberInputProps) => {
  const [qtd, setQtd] = useState(quantity);

  const dispatch = useDispatch();

  const increment = () => {
    const newQtd = qtd + 1;
    setQtd(newQtd);
    dispatch(updateItemCart(id, newQtd));
  };

  const decrement = () => {
    if (qtd > 0) {
      const newQtd = qtd - 1;
      setQtd(newQtd);
      dispatch(updateItemCart(id, newQtd));
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg w-32 justify-between px-2 py-3">
      <button onClick={decrement} className="text-lg font-bold text-gray-600">
        -
      </button>
      <input
        type="text"
        className="text-lg text-center w-12"
        value={quantity}
        min={1}
      />
      <button onClick={increment} className="text-lg font-bold text-gray-600">
        +
      </button>
    </div>
  );
};

export default NumberInput;
