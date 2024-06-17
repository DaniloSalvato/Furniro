import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const FullCart = () => {

  return (
    <div className="flex w-full justify-center flex-wrap lg:flex-nowrap items-center my-16 ">
      <div className="flex w-full justify-center flex-wrap gap-12">
        <div className="flex flex-col w-3/6 ">
            <CartItems/>
        </div>
        <div className="flex flex-col w-2/6 ">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default FullCart;
