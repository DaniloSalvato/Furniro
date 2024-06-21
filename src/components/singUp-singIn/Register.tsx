import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { CreateNewUser } from "../../Auth/firebase";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, LoginSchema } from "../../schemas/loginSchema";

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    mode: "onSubmit",
  });

  const navigate = useNavigate();

  const handleRegisterForm = async (data: LoginData) => {
    try {
      const { error } = await CreateNewUser(data.email, data.password);

      if (!error) {
        navigate("/login");
      } else {
        throw error;
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/invalid-email':
            setError('email', { type: 'manual', message: 'Invalid email' });
            break;
          case 'auth/email-already-in-use':
            setError('email', { type: 'manual', message: 'Email already in use' });
            break;
          case 'auth/weak-password':
            setError('password', { type: 'manual', message: 'Password is too weak' });
            break;
          default:
            setError('email', { type: 'manual', message: error.message });
            break;
        }
      } else {
        console.error("Error: ", error);
      }
    }
  };

  return (
    <div className="flex w-full h-full justify-center items-start">
      <section className="flex flex-col justify-center items-center font-poppins bg-customBeije-500 text-customBlack-700 md:w-4/6 lg:w-5/6 h-3/4 rounded-lg mt-20 mb-52">
        <h1 className="font-poppins font-bold text-4xl mt-20">Register</h1>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(handleRegisterForm)}
        >
          <label className="flex flex-col w-full justify-center items-center md:items-start" htmlFor="email">
            <p className="font-poppins mt-10">Email</p>
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="w-4/5 md:w-auto mt-2 p-4 px-10 rounded-lg focus:outline-none text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </label>
          <label className="flex flex-col w-full justify-center items-center md:items-start" htmlFor="password">
            <p className="font-poppins mt-10">Password</p>
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="w-4/5 md:w-auto mt-2 p-4 px-10 rounded-lg focus:outline-none text-black"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </label>

          <div className="flex justify-center">
            <button
              className="mt-10 px-10 py-2 bg-white rounded text-black hover:bg-customYellow-900 hover:text-white hover:border hover:border-white hover:box-border"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div className="flex flex-col md:flex-row w-full mt-10 mb-5 mr-5 md:mr-18 mx-8 lg:ml-10 justify-between xl:items-start text-sm">
          <div className="flex md:mr-5 items-center">
            <button
              className="ml-1 underline hover:text-black"
              type="button"
              onClick={() => navigate("/login")}
            >
              Back to login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
