import NumberInput from "../../../components/NumericInput/NumberInput";
import { formatRupiah } from "../../../utils/utils";
import { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../stores";
import { removeFromCart } from "../../../stores/slices/Cart";

import trashIcon from "../../../assets/icons/trash.svg";

const CartItems = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  return (
    <>
      {windowSize.width >= 1440 ? (
        <>
          <section className="flex w-4/5 justify-center items-start xl:grid xl:grid-cols-5 xl:w-full xl:items-center xl:justify-center xl:bg-customBeije-500">
            <span className="xl:col-span-1 xl:col-start-2 xl:justify-items-end xl:py-3 font-poppins font-medium text-base bg-customBeije-500 xl:m-2">
              Product
            </span>
            <span className="hidden xl:block xl:col-span-1 xl:col-start-3 xl:py-3 font-poppins font-medium text-base bg-customBeije-500 xl:mx-4">
              Price
            </span>
            <span className="hidden xl:block xl:col-span-1 xl:col-start-4 xl:py-3 font-poppins font-medium text-base bg-customBeije-500 xl:mx-5">
              Quantity
            </span>
            <span className="hidden xl:block xl:col-span-1 xl:col-start-5 xl:py-3 font-poppins font-medium text-base bg-customBeije-500 xl:mx-5">
              Subtotal
            </span>
            <span className="hidden xl:block xl:col-span-1 xl:col-start-6 xl:py-3 text-center text-transparent bg-customBeije-500 xl:mx-6">
              trash
            </span>
          </section>
          <section className="xl:grid xl:grid-cols-5 xl:w-full xl:items-center xl:justify-center">
            {items.map((item, index) => (
              <Fragment key={index}>
                <img
                  className="xl:col-span-1 xl:col-start-1 xl:w-20 xl:h-20 xl:rounded-lg xl:m-2"
                  src={item.image}
                  alt={item.title}
                />

                <h2 className="xl:col-start-2 xl:font-normal xl:text-base xl:text-customBlack-800 xl:m-2">
                  {item.title}
                </h2>

                <h2 className="xl:col-start-3 xl:font-poppins xl:font-normal xl:text-base text-customBlack-800 xl:m-2">
                  {formatRupiah(item.value)}
                </h2>

                <div className="xl:col-start-4 xl:m-2">
                  <NumberInput id={item.id} />
                </div>

                <p className="xl:col-start-5 xl:m-2">
                  {formatRupiah(item.value * item.quantity)}
                </p>

                <img
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  src={trashIcon}
                  alt="trash"
                  className="xl:col-start-6 xl:h-5 xl:w-5 xl:m-6"
                />
              </Fragment>
            ))}
          </section>
        </>
      ) : (
        <>
          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex w-4/5 bg-customBeije-500 rounded py-1 justify-center">
              <p className="font-poppins font-medium text-base bg-customBeije-500">
                Product(s)
              </p>
            </div>
            <div className="flex flex-col w-4/5">
              {items.map((item, index) => (
                <Fragment key={index}>
                  <div className="flex mt-8">
                    <img
                      key={item.id}
                      className="w-1/3 rounded-lg "
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="flex ml-5 sm:ml-20 gap-5 justify-between">
                      <div>
                        <p className="font-poppins font-semibold text-base sm:text-lg ">
                          {item.title}
                        </p>

                        <p className="font-poppins font-normal text-base text-customBlack-800 sm:mt-3 ">
                          {formatRupiah(item.value)}
                        </p>

                        <div className="sm:mt-3">
                          <NumberInput id={item.id} />
                        </div>

                        <p className="mt-2 sm:mt-5 border-t sm:pt-1">
                          {formatRupiah(item.value * item.quantity)}
                        </p>
                      </div>
                      <img
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                        src={trashIcon}
                        alt="trash"
                        className="sm:ml-10 lg:ml-5 w-1/6"
                      />
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartItems;
