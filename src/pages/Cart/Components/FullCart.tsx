import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const FullCart = () => {

  return (
    <div className="flex w-full justify-center flex-wrap lg:flex-nowrap items-center my-16 ">
      <div className="flex flex-col items-center lg:items-start w-full lg:flex-row  justify-center flex-wrap gap-12">
        <div className="flex flex-col  w-full md:w-4/5 lg:w-3/6 ">
            <CartItems/>
        </div>
        <div className="flex flex-col w-full md:w-4/5 lg:w-2/6 ">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default FullCart;
