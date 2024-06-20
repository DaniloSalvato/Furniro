import { useEffect, useState } from "react";
import { updateItemCart } from "../../redux/thunks/cart";
import { useDispatch } from "react-redux";

interface NumberInputProps {
  id: number;
  quantity:number
  showButton?: boolean;
}

type Operation = "increment" | "decrement";

const NumberInput = ({ id, quantity, showButton }: NumberInputProps) => {

  const [qtd, setQtd] = useState(quantity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateItemCart(id, qtd));
  }, [qtd]);

  // const handleAddToUp = (id:number, quantity:number, item:CartItem) =>{
  //   const isExist =  cartItems.items.filter(item => item.id === id)
  //     console.log(isExist)
  //    isExist ? console.log(dispatch(updateItemCart(id,quantity)))  : console.log(dispatch(addItemToCart(item!)))    
  // }

  const count = (operation: Operation) => {
    if (operation === "increment") {
      setQtd(qtd! + 1);
    } else if (operation === "decrement" && qtd > 0) {
      setQtd(qtd! - 1);
    }
  };

  return (
    <>
      <div className="flex items-center border border-gray-300 rounded-lg w-32 justify-between px-3 py-4">
        <button
          onClick={() => count("decrement")}
          className="font-poppins font-medium text-base text-center"
        >
          -
        </button>
        <input
          type="text"
          className="font-poppins font-medium text-base text-center w-12"
          value={qtd}
          min={1}
        />
        <button
          onClick={() => count("increment")}
          className="font-poppins font-medium text-base text-center"
        >
          +
        </button>
      </div>

      {showButton && (
        <button
          className="font-poppins font-normal text-xl ml-4 py-1 px-8 border border-black rounded-lg hover:border-white hover:bg-customYellow-900 hover:text-white transform transition-transform duration-200 hover:scale-105 cursor-pointer"
          onClick={() => dispatch(updateItemCart(id, qtd!))}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default NumberInput;
