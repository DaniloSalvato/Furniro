const Footer = () => {
  return (
    <>
      <div className="mt-10 flex flex-col justify-center items-center w-full font-poppins text-black font-medium text-base">
        <div className="w-11/12 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4 border-b border-b-customBlack-950">
          <div>
            <h1 className="mb-7 font-montserrat font-bold text-2xl">Furino.</h1>
            <p className="mb-12 text-customBlack-800">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
            <div className="flex">
              <div className=" flex h-6 w-8 mr-7 shadow-xl justify-center items-center rounded-full transform transition-transform duration-200 hover:scale-105">
                <img
                  src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/facebook.svg"
                  alt="facebook-icon"
                />
              </div>
              <div className="flex h-6 w-8 mr-7 shadow-xl justify-center items-center rounded-full transform transition-transform duration-200 hover:scale-105">
                <img
                  src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/instagram.svg"
                  alt="instagram-icon"
                />
              </div>

              <div className="flex h-6 w-8 mr-7 shadow-xl justify-center items-center rounded-full transform transition-transform duration-200 hover:scale-105">
                <img
                  src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/twitter.svg"
                  alt="x-icon"
                />
              </div>

              <div className="flex h-6 w-8 mr-7 shadow-xl justify-center items-center rounded-full transform transition-transform duration-200 hover:scale-105">
                <img
                  src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/linkedin.svg"
                  alt="linkedin-icon"
                />
              </div>
            </div>
          </div>

          <div>
            <ul>
              <li className="mb-7">
                <p className="text-customBlack-800">Links</p>
              </li>
              <li className="mb-7 transform transition-transform duration-200 hover:scale-105">Home</li>
              <li className="mb-7 transform transition-transform duration-200 hover:scale-105">Shop</li>
              <li className="mb-7 transform transition-transform duration-200 hover:scale-105">About</li>
              <li className="mb-7 transform transition-transform duration-200 hover:scale-105">Contact</li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-7">
                <p className="text-customBlack-800">Help</p>
              </li>
              <li className="mb-7 transform transition-transform duration-200 hover:scale-105">Payment Options</li>
              <li className="mb-7 transform transition-transform duration-200 hover:scale-105">Returns</li>
              <li className="mb-7 transform transition-transform duration-200 hover:scale-105">Privacy Policies</li>
            </ul>
          </div>

          <div>
            <p className="mb-7 text-customBlack-800">Newsletter</p>
            <div>
              <input className="border-b border-b-black mr-2 focus:outline-none" type="text" />
              <button className=" mb-10 md:mb-0 border-b border-b-black transform transition-transform duration-200 hover:scale-105">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="w-11/12">
          <p className="text-left my-8">2023 furino. All rights reverved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
