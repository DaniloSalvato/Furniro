import trophy from "../../assets/icons/trophy.svg"
import warranty from "../../assets/icons/warranty.svg"
import shipping from "../../assets/icons/free-shipping.svg"
import support from "../../assets/icons/support.svg"

const Certificate = () => {
  return (
    <section className="flex w-full justify-center items-center bg-customBeije-300 p-5">
    <div className="flex flex-wrap w-4/5 sm:w-full">
      <div className="flex sm:w-1/2 lg:w-1/4 p-4 justify-center items-center text-left my-6 transform transition-transform duration-200 hover:scale-105">
        <img
          src={trophy}
          alt="Trophy-icon"
          className="mr-4"
        />
        <div>
          <h1 className="font-poppins text-base font-semibold md:text-2xl md:font-semibold">
            High Quality
          </h1>
          <p className="font-poppins text-sm font-medium md:text-xl md:font-medium text-customGray-500">
            Crafted from top materials
          </p>
        </div>
      </div>
      <div className="flex sm:w-1/2 lg:w-1/4 p-4 justify-center items-center text-left my-6 transform transition-transform duration-200 hover:scale-105">
        <img
          src={warranty}
          alt="Warranty-icon"
          className="mr-4"
        />
        <div>
          <h1 className="font-poppins text-base font-semibold md:text-2xl md:font-semibold">
            Warranty Protection
          </h1>
          <p className="font-poppins text-sm font-medium md:text-xl md:font-medium text-customGray-500">
            Over 2 years
          </p>
        </div>
      </div>
      <div className="flex sm:w-1/2 lg:w-1/4 p-4 justify-center items-center text-left my-6 transform transition-transform duration-200 hover:scale-105">
        <img
          src={shipping}
          alt="Free-shipping-icon"
          className="mr-4"
        />
        <div>
          <h1 className="font-poppins text-base font-semibold md:text-2xl md:font-semibold">
            Free Shipping
          </h1>
          <p className="font-poppins text-sm font-medium md:text-xl md:font-medium text-customGray-500">
            Order over 150 $
          </p>
        </div>
      </div>
      <div className="flex sm:w-1/2 lg:w-1/4 p-4 justify-center items-center text-left my-6 transform transition-transform duration-200 hover:scale-105">
        <img
          src={support}
          alt="Support-icon"
          className="mr-4"
        />
        <div>
          <h1 className="font-poppins text-base font-semibold md:text-2xl md:font-semibold">
            24 / 7 Support
          </h1>
          <p className="font-poppins text-sm font-medium md:text-xl md:font-medium text-customGray-500">
            Dedicated support
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Certificate;
