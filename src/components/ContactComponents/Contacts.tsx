import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactData } from "../../schemas/contactSchema";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: ContactData) => {
    console.log(data);
    // Process the data
    reset();
  };
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex flex-col w-4/5 md:w-2/5 justify-center items-center">
        <h1 className="font-poppins font-semibold text-4xl mt-28">
          Get In Touch With Us
        </h1>
        <p className="font-poppins font-normal text-base text-customBlack-800 mt-5">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-4/5 md:w-3/4 lg:w-2/3 justify-center mt-20 ">
        <div className="flex-1 w-11/12 md:w-2/5">
          <div>
            <div className="">
              <img
                src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/pinpoint.svg"
                alt=""
                className=""
              />
              <div className="flex ml-5">
                <h4 className="font-poppins font-medium text-2xl ml-6">
                  Address
                </h4>
              </div >
              <span className="flex font-poppins font-normal text-base ml-11 ">
                236 5th SE Avenue, New <br /> York NY10000, United <br /> States
              </span>
            </div>
          </div>

          <div>
            <div className="flex-col mt-6">
              <div className="flex">
                <img
                  src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/telephone.svg"
                  alt=""
                />

                <h4 className="font-poppins font-medium text-2xl ml-5">
                  Phone
                </h4>
              </div>

              <div className="flex flex-col ml-11">
                <span className="font-poppins font-normal text-base">
                  Mobile: +(84) 546-6789
                </span>

                <span className="font-poppins font-normal text-base">
                  Hotline: +(84) 456-6789
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex mt-6">
              <img
                src="https://furniro-ds.s3.us-east-2.amazonaws.com/icons/clock.svg"
                alt=""
              />
              <h4 className="font-poppins font-medium text-2xl  ml-5">
                Working Time
              </h4>
            </div>

            <div className="flex flex-col ml-11">
              <span className="font-poppins font-normal text-base ">
                Monday-Friday: 9:00 - 22:00
              </span>
              <span className="font-poppins font-normal text-base">
                Saturday-Sunday: 9:00 - 21:00
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
            <div className="mb-4 mt-10 md:mt-0">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                id="name"
                {...register("name")}
                placeholder="Abc"
                className="mt-4 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customYellow-900 focus:border-customYellow-900 sm:text-sm"
              />
              {errors.name && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Abc@def.com"
                className="mt-4 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customYellow-900 focus:border-customYellow-900 sm:text-sm"
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                {...register("subject")}
                placeholder="This is an optional"
                className="mt-4 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customYellow-900 focus:border-customYellow-900 sm:text-sm"
              />
              {errors.subject && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                placeholder="Hi! i’d like to ask about"
                className="mt-4 block w-full px-3 py-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customYellow-900 focus:border-customYellow-900 sm:text-sm"
              />
              {errors.message && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className="flex mb-16 mt-12  justify-center md:justify-normal">
              <button
                type="submit"
                className="font-poppins px-20 py-3 bg-customYellow-900 text-white font-light text-base rounded-md shadow-sm hover:bg-customYellow-900 transform transition-transform duration-200 hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
