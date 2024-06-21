import { useEffect, useState } from "react";
import { addItemToCart, updateItemCart } from "../../redux/thunks/cart";
import { useDispatch } from "react-redux";
import { CartItem } from "../../types/Cart";
import { RootState } from "../../redux/reducers";
import { useSelector } from "react-redux";

interface NumberInputProps {
  id: number;
  item?: CartItem;
  showButton?: boolean;
}

type Operation = "increment" | "decrement";

const NumberInput = ({ id, item, showButton }: NumberInputProps) => {

  const  cartItems  = useSelector((state: RootState) => state.cart.cartItems.find(cart => cart.id === id)?.quantity);
  const [qtd, setQtd] = useState(cartItems|| 0);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(updateItemCart(id, qtd!))
  },[qtd])

  const count = (operation: Operation) => {
    setQtd((prevQtd) => {
      let newQuantity = prevQtd;
      if (operation === "increment") {
        newQuantity = prevQtd + 1;
      } else if (operation === "decrement" && prevQtd > 0) {
        newQuantity = prevQtd - 1;     
      }
      console.log("new quantity",newQuantity);
      
      return newQuantity;
    });
  };


  return (
    <>
      <div className="flex items-center border border-gray-300 rounded-lg w-24 md:w-32 justify-between px-3 py-2sm sm:py-2 md:py-3 lg:py-4">
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
          onClick={() => dispatch(addItemToCart({...item!, quantity: qtd}))}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default NumberInput;
