import { EmailSchema, emailData } from "../schemas/emailSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<emailData>({
    resolver: zodResolver(EmailSchema),
    mode: "onSubmit",
  });

  const handleSubscribe = (data: emailData) => {
    localStorage.setItem("email", data.email);
    reset()
  };
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
              <Link to="https://www.facebook.com/">
                <div className=" flex h-6 w-8 mr-7 shadow-xl justify-center items-center rounded-full transform transition-transform duration-200 hover:scale-105">
                  <img
                    src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/facebook.svg"
                    alt="facebook-icon"
                  />
                </div>
              </Link>

              <Link to="https://www.instagram.com/">
                <div className="flex h-6 w-8 mr-7 shadow-xl justify-center items-center rounded-full transform transition-transform duration-200 hover:scale-105">
                  <img
                    src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/instagram.svg"
                    alt="instagram-icon"
                  />
                </div>
              </Link>

              <Link to="https://x.com">
                <div className="flex h-6 w-8 mr-7 shadow-xl justify-center items-center rounded-full transform transition-transform duration-200 hover:scale-105">
                  <img
                    src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/twitter.svg"
                    alt="x-icon"
                  />
                </div>
              </Link>

              <Link to="https://www.linkedin.com/mynetwork/grow/">
                <div className="flex h-6 w-8 mr-7 shadow-xl justify-center items-center rounded-full transform transition-transform duration-200 hover:scale-105">
                  <img
                    src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/linkedin.svg"
                    alt="linkedin-icon"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <ul>
              <li className="mb-7">
                <p className="text-customBlack-800">Links</p>
              </li>

              <Link to={"/home"}>
                <li className="mb-7 transform transition-transform duration-200 hover:scale-105">
                  Home
                </li>
              </Link>

              <Link to={"/shop"}>
                <li className="mb-7 transform transition-transform duration-200 hover:scale-105">
                  Shop
                </li>
              </Link>

              <Link to={"/about"}>
                <li className="mb-7 transform transition-transform duration-200 hover:scale-105">
                  About
                </li>
              </Link>

              <Link to={"/contact"}>
                <li className="mb-7 transform transition-transform duration-200 hover:scale-105">
                  Contact
                </li>
              </Link>
              
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-7">
                <p className="text-customBlack-800">Help</p>
              </li>
              <li className="mb-7 transform transition-transform duration-200 hover:scale-105">
                Payment Options
              </li>
              <li className="mb-7 transform transition-transform duration-200 hover:scale-105">
                Returns
              </li>
              <li className="mb-7 transform transition-transform duration-200 hover:scale-105">
                Privacy Policies
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-7 text-customBlack-800">Newsletter</p>
            <div>
              <form onSubmit={handleSubmit(handleSubscribe)}>
                <input
                  {...register("email")}
                  className="border-b border-b-black mr-2 focus:outline-none"
                  type="text"
                />

                <button
                  type="submit"
                  className=" mb-10 md:mb-0 border-b border-b-black transform transition-transform duration-200 hover:scale-105"
                >
                  SUBSCRIBE
                </button>
              </form>
              {errors && (
                <span className="text-xs text-red-600">
                  {errors.email?.message}
                </span>
              )}
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
