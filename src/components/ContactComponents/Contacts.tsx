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
      <div className="flex flex-col w-2/5 justify-center items-center">
        <h1 className="font-poppins font-semibold text-4xl mt-28">
          Get In Touch With Us
        </h1>
        <p className="font-poppins font-normal text-base text-customBlack-800 mt-5">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex w-3/4 justify-center mt-20 gap-8">
        <div className="flex-1 w-2/5">
          <div>
            <h4 className="font-poppins font-medium text-2xl">Address</h4>
            <span className="font-poppins font-normal text-base ">
              236 5th SE Avenue, New York NY10000, United States
            </span>
          </div>
          <div className="mt-6">
            <h4 className="font-poppins font-medium text-2xl">Phone</h4>
            <div className="flex flex-col">
              <span className="font-poppins font-normal text-base">
                Mobile: +(84) 546-6789
              </span>
              <span className="font-poppins font-normal text-base">
                Hotline: +(84) 456-6789
              </span>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-poppins font-medium text-2xl">Working Time</h4>
            <div className="flex flex-col">
              <span className="font-poppins font-normal text-base ">
                Monday-Friday: 9:00 - 22:00
              </span>
              <span className="font-poppins font-normal text-base">
                Saturday-Sunday: 9:00 - 21:00
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                id="name"
                {...register("name")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customYellow-900 focus:border-customYellow-900 sm:text-sm"
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customYellow-900 focus:border-customYellow-900 sm:text-sm"
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customYellow-900 focus:border-customYellow-900 sm:text-sm"
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customYellow-900 focus:border-customYellow-900 sm:text-sm"
              />
              {errors.message && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="mb-4 ">
        <button
          type="submit"
          className=" px-4 py-2 bg-customYellow-900 text-white font-medium text-sm rounded-md shadow-sm hover:bg-customYellow-900"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contacts;
