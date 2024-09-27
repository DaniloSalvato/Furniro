import { formatRupiah, totalAmount } from "../../../utils/utils";
import { Form as FormComponents } from "../../../components/Form";
import CheckoutTotal from "./CheckoutTotal";
import { useOrder } from "./useOrder";

const BillingDetails = () => {
  const {
    handleSubmit,
    handleFormSubmit,
    register,
    items,
    errors,
    zipCodeMask,
    payment,
  } = useOrder();

  return (
    <form
      className="flex flex-col items-start md:flex-row w-full px-10 py-10 lg:px-[135px] md:py-[150px] md:gap-20"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <section className="flex flex-col w-full justify-center items-center gap-9">
        <FormComponents.Title variants="secondary">
          Billing details
        </FormComponents.Title>
        <section className="flex flex-col lg:flex-row font-poppins justify-center items-center font-medium text-base gap-8 mt-8">
          <FormComponents.Container variants="secondary">
            <FormComponents.Label variants="secondary" htmlFor="firstname">
              First Name
            </FormComponents.Label>
            <FormComponents.Input
              id="firstname"
              {...register("firstName")}
              variants="fifth"
              type="text"
            />
            {errors.firstName && (
              <FormComponents.Error variants="primary">
                {errors.firstName.message}
              </FormComponents.Error>
            )}
          </FormComponents.Container>

          <FormComponents.Container variants="secondary">
            <FormComponents.Label variants="secondary" htmlFor="lastname">
              Last Name
            </FormComponents.Label>
            <FormComponents.Input
              id="lastname"
              {...register("lastName")}
              variants="fifth"
              type="text"
            />
            {errors.lastName && (
              <FormComponents.Error variants="primary">
                {errors.lastName.message}
              </FormComponents.Error>
            )}
          </FormComponents.Container>
        </section>

        <FormComponents.Container variants="secondary">
          <FormComponents.Label variants="secondary" htmlFor="company">
            Company Name (Optional)
          </FormComponents.Label>
          <FormComponents.Input
            id="company"
            {...register("company")}
            variants="sixth"
            type="text"
          />
        </FormComponents.Container>

        <FormComponents.Container variants="secondary">
          <FormComponents.Label variants="secondary" htmlFor="zip">
            ZIP code
          </FormComponents.Label>

          <FormComponents.Input
            {...register("zip", {
              onChange: (e) => {
                e.target.value = zipCodeMask(e.target.value);
              },
            })}
            variants="sixth"
            maxLength={9}
            type="text"
          />

          {errors.zip && (
            <FormComponents.Error variants="primary">
              {errors.zip.message}
            </FormComponents.Error>
          )}
        </FormComponents.Container>

        <FormComponents.Container variants="secondary">
          <FormComponents.Label variants="secondary" htmlFor="country">
            Country / Region
          </FormComponents.Label>
          <FormComponents.Input
            id="country"
            {...register("country")}
            variants="sixth"
            type="text"
          />
          {errors.country && (
            <FormComponents.Error variants="primary">
              {errors.country.message}
            </FormComponents.Error>
          )}
        </FormComponents.Container>

        <FormComponents.Container variants="secondary">
          <FormComponents.Label variants="secondary" htmlFor="street">
            Street address
          </FormComponents.Label>
          <FormComponents.Input
            id="street"
            {...register("street")}
            variants="sixth"
            type="text"
          />
          {errors.street && (
            <FormComponents.Error variants="primary">
              {errors.street.message}
            </FormComponents.Error>
          )}
        </FormComponents.Container>

        <FormComponents.Container variants="secondary">
          <FormComponents.Label variants="secondary" htmlFor="city">
            Town / City
          </FormComponents.Label>
          <FormComponents.Input
            id="city"
            {...register("city")}
            variants="sixth"
            type="text"
          />
          {errors.city && (
            <FormComponents.Error variants="primary">
              {errors.city.message}
            </FormComponents.Error>
          )}
        </FormComponents.Container>

        <FormComponents.Container variants="secondary">
          <FormComponents.Label variants="secondary" htmlFor="province">
            Province
          </FormComponents.Label>
          <FormComponents.Input
            id="province"
            {...register("province")}
            variants="sixth"
            type="text"
          />
          {errors.province && (
            <FormComponents.Error variants="primary">
              {errors.province.message}
            </FormComponents.Error>
          )}
        </FormComponents.Container>

        <FormComponents.Container variants="secondary">
          <FormComponents.Label variants="secondary" htmlFor="add">
            Add-on address
          </FormComponents.Label>
          <FormComponents.Input
            id="add"
            {...register("add")}
            variants="sixth"
            type="text"
          />
        </FormComponents.Container>

        <FormComponents.Container variants="secondary">
          <FormComponents.Label variants="secondary" htmlFor="email">
            Email address
          </FormComponents.Label>
          <FormComponents.Input
            id="email"
            {...register("email")}
            variants="sixth"
            type="text"
          />
          {errors.email && (
            <FormComponents.Error variants="primary">
              {errors.email.message}
            </FormComponents.Error>
          )}
        </FormComponents.Container>

        <FormComponents.Container variants="secondary">
          <FormComponents.Input
            id="additionalInfo"
            {...register("additionalInfo")}
            placeholder="Additional information"
            variants="seventh"
            type="text"
          />
        </FormComponents.Container>
      </section>

      <section className="flex flex-col w-full md:mt-16 justify-center gap-5">
        <article className="flex justify-between font-poppins font-medium text-2xl">
          <span>Product</span>
          <span>Subtotal</span>
        </article>

        <CheckoutTotal items={items} />

        <article className="flex justify-between font-poppins font-normal text-base">
          <span className="">Subtotal</span>
          <span className="font-light">{formatRupiah(totalAmount(items))}</span>
        </article>

        <article className="flex justify-between font-poppins border-b border-b-customBlack-950 pb-10">
          <span className="font-normal text-base">Total</span>
          <span className="font-bold text-2xl text-customYellow-900">
            {formatRupiah(totalAmount(items))}
          </span>
        </article>

        <article>
          <div className="flex justify-start items-center gap-3">
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <h4 className="font-poppins font-normal text-base">
              {payment === "Direct Bank Transfer"
                ? "Direct Bank Transfer"
                : "Cash On Delivery"}
            </h4>
          </div>
          <div className="mt-4">
            <p className="font-poppins font-light text-base text-customBlack-800">
              {payment === "Direct Bank Transfer"
                ? `Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.`
                : `Make your payment directly into our Cash. Please use your
              cash to pay the ticket we will send to you.`}
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
                  className="accent-black peer opacity-55 checked:opacity-100"
                />
                <label
                  className="peer-checked:opacity-100 opacity-55"
                  htmlFor="Direct"
                >
                  Direct Bank Transfer
                </label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  id="Cash"
                  value="Cash On Delivery"
                  {...register("paymentMethod")}
                  className="accent-black peer opacity-55 checked:opacity-100"
                />
                <label
                  className="peer-checked:opacity-100 opacity-55"
                  htmlFor="Cash"
                >
                  Cash On Delivery
                </label>
              </div>
            </fieldset>
            {errors.paymentMethod && (
              <p className="font-poppins text-red-600 text-xs">
                {errors.paymentMethod.message}
              </p>
            )}
          </div>
        </article>

        <div className="mt-5">
          <p className="font-poppins font-light text-base">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </div>

        <div className="flex justify-center items-center mt-10 mb-10 md:mb-0 font-poppins font-normal text-xl">
          <button
            type="submit"
            className="border border-black px-14 md:px-28 py-5 rounded-2xl"
          >
            Place order
          </button>
        </div>
      </section>
    </form>
  );
};

export default BillingDetails;
