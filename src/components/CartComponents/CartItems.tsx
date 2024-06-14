// import { useDispatch, useSelector } from "react-redux";
import {  ProductFull } from "../../types/Product";
// import {
//   addProduct,
//   removeProduct,
//   updateQuantity,
// } from "../../redux/Cart/cartSlice";
// import NumberInputComponent from "../GenericComponents/NumberInputComponent";
// import { useState } from "react";
// import { RootState } from "../../redux/store";

type CartItemProps = {
  cartItem: ProductFull[];
};

const CartItems = ({ cartItem }: CartItemProps) => {
  return (
    <div className="grid grid-cols-6 w-full items-center justify-center">
      <span className="col-start-1 py-3 text-transparent bg-customBeije-500">
        space
      </span>
      <span className="col-start-2 py-3 font-poppins font-medium text-base bg-customBeije-500">
        Product
      </span>
      <span className="col-start-3 py-3 font-poppins font-medium text-base bg-customBeije-500">
        Price
      </span>
      <span className="col-start-4 py-3 font-poppins font-medium text-base bg-customBeije-500">
        Quantity
      </span>
      <span className="col-start-5 py-3 font-poppins font-medium text-base bg-customBeije-500">
        Subtotal
      </span>
      <span className="col-start-6 py-3 text-center text-transparent bg-customBeije-500">
        trash
      </span>

      {cartItem.map((item) => (
        <>
          <img
            className="col-start-1 w-16 h-16 py-3 rounded-md "
            src={item.image}
            alt={item.title}
          />
          <span className="col-start-2 font-normal text-base text-customBlack-800">
            {item.title}
          </span>

          <span className="col-start-3 font-poppins font-normal text-base text-customBlack-800">
            {item.value}
          </span>

          <span className="col-start-4">
            {item.quantity}
            {/* <NumberInputComponent
              id={item.id}
              newQuantity={newQuantity}
              setNewQuantity={setNewQuantity}
            /> */}
          </span>

          <span className="col-start-5">{item.value * item.quantity}</span>
          <img
            // onClick={() => dispatch(removeProduct(item.id))}
            src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/trash.svg"
            alt="trash"
            className="col-start-6 h-5 w-5 text-center"
          />
        </>
      ))}
    </div>
  );
};

export default CartItems;
