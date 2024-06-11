const Certificate = () => {
  return (
    <div className="flex w-full flex-wrap bg-customBeije-300 py-16">
      <div className="flex flex-1 justify-center items-center">
        <img src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/trophy.svg" alt="Trophy-icon" />
        <div className="pl-2 px-5">
          <h1 className="font-poppins text-2xl font-semibold">High Quality</h1>
          <p className="font-poppins text-xl font-medium text-customGray-500">crafted from top materials</p>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/warranty.svg" alt="Warranty-icon" />
        <div className="pl-2">
          <h1 className="font-poppins text-2xl font-semibold">Warranty Protection</h1>
          <p className="font-poppins text-xl font-medium text-customGray-500">Over 2 years</p>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/free-shipping.svg" alt="Free-shipping-icon" />
        <div className="pl-2 px-8">
          <h1 className="w-full font-poppins text-2xl font-semibold">Free Shipping</h1>
          <p className="font-poppins text-xl font-medium text-customGray-500">Order over 150 $</p>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/support.svg" alt="Support-icon" />
        <div className="pl-2">
          <h1 className="font-poppins text-2xl font-semibold">24 / 7 Support</h1>
          <p className="font-poppins text-xl font-medium text-customGray-500">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
