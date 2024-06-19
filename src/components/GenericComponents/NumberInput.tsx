import { useEffect, useState } from "react";
import { updateItemCart } from "../../redux/thunks/cart";
import { useDispatch } from "react-redux";

interface NumberInputProps {
  id: number;
  showButton?: boolean;
}

type Operation = "increment" | "decrement";

const NumberInput = ({ id, showButton }: NumberInputProps) => {

  

  const [qtd, setQtd] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateItemCart(id, qtd));
  }, [qtd]);

  const count = (operation: Operation) => {
    if (operation === "increment") {
      setQtd(qtd + 1);
    } else if (operation === "decrement" && qtd > 0) {
      setQtd(qtd - 1);
    }
  };

  return (
    <>
      <div className="flex items-center border border-gray-300 rounded-lg w-32 justify-between px-2 py-3">
        <button
          onClick={() => count("decrement")}
          className="text-lg font-bold text-gray-600"
        >
          -
        </button>
        <input
          type="text"
          className="text-lg text-center w-12"
          value={qtd}
          min={1}
        />
        <button
          onClick={() => count("increment")}
          className="text-lg font-bold text-gray-600"
        >
          +
        </button>
      </div>

      {showButton && (
        <button
          className=" ml-4 py-1 px-8 border border-black rounded-lg"
          onClick={() => dispatch(updateItemCart(id, qtd))}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default NumberInput;
