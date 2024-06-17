import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { billingSchema, BillingData } from "../../schemas/billingSchema";
import { toast } from "react-toastify";
import { Item } from "../../types/Item";
import { RootState } from "../../redux/reducers";
import { formatRupiah, totalAmount } from "../../utils/utils";

const BillingDetails = () => {

  const { cartItems } = useSelector((state: RootState) => state.cart);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orderPlaced, setOrderPlaced] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BillingData>({
    resolver: zodResolver(billingSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: BillingData) => {
    const orderData = {
      ...data,
      items: cartItems,
      totalAmount: totalAmount,
    };

    console.log(orderData);
    // Process the data
    reset();
    setOrderPlaced(true);
    setTimeout(() => {
      toast.success("Order sended!");
      setOrderPlaced(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <main className="flex flex-col md:flex-row w-full h-full">
        <section className="flex flex-1 justify-center items-center">
          <div className="w-4/5 md:w-2/5">
            <h1 className="font-poppins font-semibold text-4xl mt-20">
              Billing details
            </h1>
            <div className="flex font-poppins justify-center items-center font-medium text-base gap-8 mt-8">
              <div className="flex flex-col">
                <label htmlFor="firstname">First Name</label>
                <input
                  id="firstname"
                  {...register("firstName")}
                  className="border w-full h-12 rounded-md mt-5"
                  type="text"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-xs">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastname">Last Name</label>
                <input
                  id="lastname"
                  {...register("lastName")}
                  className="border w-full h-12 rounded-md mt-5"
                  type="text"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-xs">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col font-poppins font-medium text-base mt-5">
              <label htmlFor="company">Company Name (Optional)</label>
              <input
                id="company"
                {...register("company")}
                className="border w-full h-12 rounded-md mt-5"
                type="text"
              />
            </div>

            <div className="flex flex-col font-poppins font-medium text-base mt-5">
              <label htmlFor="zip">ZIP code</label>
              <input
                id="zip"
                {...register("zip")}
                className="border w-full h-12 rounded-md mt-5"
                type="text"
              />
              {errors.zip && (
                <p className="text-red-600 text-xs">{errors.zip.message}</p>
              )}
            </div>

            <div className="flex flex-col font-poppins font-medium text-base mt-5">
              <label htmlFor="country">Country / Region</label>
              <input
                id="country"
                {...register("country")}
                className="border w-full h-12 rounded-md mt-5"
                type="text"
              />
              {errors.country && (
                <p className="text-red-600 text-xs">{errors.country.message}</p>
              )}
            </div>

            <div className="flex flex-col font-poppins font-medium text-base mt-5">
              <label htmlFor="street">Street address</label>
              <input
                id="street"
                {...register("street")}
                className="border w-full h-12 rounded-md mt-5"
                type="text"
              />
              {errors.street && (
                <p className="text-red-600 text-xs">{errors.street.message}</p>
              )}
            </div>

            <div className="flex flex-col font-poppins font-medium text-base mt-5">
              <label htmlFor="city">Town / City</label>
              <input
                id="city"
                {...register("city")}
                className="border w-full h-12 rounded-md mt-5"
                type="text"
              />
              {errors.city && (
                <p className="text-red-600 text-xs">{errors.city.message}</p>
              )}
            </div>

            <div className="flex flex-col font-poppins font-medium text-base mt-5">
              <label htmlFor="province">Province</label>
              <input
                id="province"
                {...register("province")}
                className="border w-full h-12 rounded-md mt-5"
                type="text"
              />
              {errors.province && (
                <p className="text-red-600 text-xs">
                  {errors.province.message}
                </p>
              )}
            </div>

            <div className=" flex flex-col font-poppins font-medium text-base mt-5">
              <label htmlFor="add">Add-on address</label>
              <input
                id="add"
                {...register("add")}
                className="border w-full h-12 rounded-md mt-5"
                type="text"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="flex flex-col font-poppins font-medium text-base mt-5"
              >
                Email address
              </label>
              <input
                id="email"
                {...register("email")}
                className="border w-full h-12 rounded-md mt-5 mb-5"
                type="text"
              />
              {errors.email && (
                <p className="text-red-600 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                id="additionalInfo"
                {...register("additionalInfo")}
                placeholder="Additional information"
                className="border w-full h-12 rounded-md mt-5 mb-20 font-poppins font-normal text-base"
                type="text"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-1 justify-center items-center">
          <div className="w-4/5 h-full md:pt-28">
            <div className="flex justify-between mb-5">
              <span className="font-poppins font-medium text-2xl">Product</span>
              <span className="font-poppins font-medium text-2xl">
                Subtotal
              </span>
            </div>

            <div>
              {cartItems.map((item: Item) => (
                <div key={item.id} className="flex w-full flex-col">
                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-3 mb-5">
                      <span className="font-poppins font-normal text-base text-customBlack-800">
                        {item.title}
                      </span>
                      <span className="font-poppins font-medium text-xs">
                        X
                      </span>
                      <span className="font-poppins font-medium text-xs">
                        {item.quantity}
                      </span>
                    </div>
                    <div>
                      <span className="font-poppins font-light text-base mb-5">
                        {formatRupiah(item.value * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between mb-5">
                <span className="font-poppins font-normal text-base">
                  Subtotal
                </span>
                <span className="font-poppins font-light text-base">
                  {formatRupiah(totalAmount(cartItems))}
                </span>
              </div>

              <div className="flex justify-between border-b border-b-customBlack-950 pb-10">
                <span className="font-poppins font-normal text-base">
                  Total
                </span>
                <span className="font-poppins font-bold text-2xl text-customYellow-900">
                  {formatRupiah(totalAmount(cartItems))}
                </span>
              </div>

              <div className="mt-5">
                <div className="flex justify-start items-center gap-3">
                  <div className="h-3 w-3 bg-black rounded-full"></div>
                  <h4 className="font-poppins font-normal text-base">
                    Direct Bank Transfer
                  </h4>
                </div>
                <div className="mt-4">
                  <p className="font-poppins font-light text-base text-customBlack-800">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
                <div className="mt-10">
                  <fieldset className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="Direct"
                        value="Direct Bank Transfer"
                        {...register("paymentMethod")}
                        className="accent-black"
                      />
                      <label htmlFor="Direct">Direct Bank Transfer</label>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <input
                        type="radio"
                        id="Cash"
                        value="Cash On Delivery"
                        {...register("paymentMethod")}
                        className="accent-black"
                      />
                      <label htmlFor="Cash">Cash On Delivery</label>
                    </div>
                  </fieldset>
                  {errors.paymentMethod && (
                    <p className="text-red-600 text-xs">
                      {errors.paymentMethod.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <p className="font-poppins font-light text-base">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>
              </div>

              <div className="flex justify-center items-center mt-10 mb-10 md:mb-0 font-poppins font-normal text-xl">
                <button className="border border-black px-14 md:px-28 py-5 rounded-2xl">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </form>
  );
};

export default BillingDetails;
