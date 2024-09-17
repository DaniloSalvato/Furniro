import { FirebaseError } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, LoginSchema } from "../../../schemas/loginSchema";
import { UserLogin } from "../../../Auth/firebase";
import { useAppDispatch } from "../../../stores";

import { Form as FormComponents } from "../../../components/Form";
import { setUser } from "../../../stores/slices/Users";
import { Button } from "../../../components/Button/Button";
import ButtonGoogleLogin from "./ButtonGoogleLogin";
import ButtonFacebookLogin from "./ButtonFacebookLogin";

const Login = () => {
  const dispatch = useAppDispatch();

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

  const handleLoginForm = async (data: LoginData) => {
    try {
      const result = await UserLogin(data.email, data.password);

      if (result) {
        const user = {
          uid: result.user.uid,
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          accessToken: await result.user.getIdToken(),
        };

        dispatch(setUser(user));

        return navigate("/home");
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        // console.error("Firebase error code:", error.code); // Log adicional para diagnosticar
        switch (error.code) {
          case "auth/invalid-email":
            setError("email", { type: "manual", message: "Invalid email" });
            break;
          case "auth/user-disabled":
            setError("email", { type: "manual", message: "User disabled" });
            break;
          case "auth/user-not-found":
            setError("email", { type: "manual", message: "User not found" });
            break;
          case "auth/wrong-password":
            setError("password", {
              type: "manual",
              message: "Incorrect password",
            });
            break;
          case "auth/too-many-requests":
            setError("email", {
              type: "manual",
              message: "Too many attempts. Try again later.",
            });
            break;
          case "auth/invalid-credential":
            setError("email", {
              type: "manual",
              message: "Incorrect e-mail or password",
            });
            break;
          default:
            setError("email", { type: "manual", message: error.message });
            break;
        }
      } else {
        console.error("Error: ", error);
      }
    }
  };

  return (
    <section className="flex flex-row-reverse">
      <article className="hidden md:flex bg-background-login bg-cover bg-no-repeat w-full h-screen justify-start items-center"></article>
      <article className="flex flex-col w-full xl:w-[40%] h-screen justify-center items-center font-poppins bg-customBeije-500 text-customBlack-700">
        <form
          className="flex flex-col w-full"
          onSubmit={handleSubmit(handleLoginForm)}
        >
          <FormComponents.Root>
            <FormComponents.Title>Login</FormComponents.Title>

            <FormComponents.Container>
              <FormComponents.Label
                className="flex w-full justify-start"
                htmlFor="email"
              >
                Email
              </FormComponents.Label>
              <FormComponents.Input
                {...register("email")}
                type="email"
                id="email"
                placeholder="E-mail"
                color="primary"
                area="primary"
                className="flex w-full justify-center"
              />
              {errors.email && (
                <FormComponents.Error>
                  {errors.email.message}
                </FormComponents.Error>
              )}
            </FormComponents.Container>

            <FormComponents.Container>
              <FormComponents.Label
                className="flex w-full justify-start md:items-start"
                htmlFor="password"
              >
                Password
              </FormComponents.Label>

              <FormComponents.Input
                {...register("password")}
                type="password"
                id="password"
                placeholder="password"
                color="primary"
                area="primary"
                className="flex w-full justify-center"
              />
              {errors.password && (
                <FormComponents.Error>
                  {errors.password.message}
                </FormComponents.Error>
              )}
            </FormComponents.Container>

            <FormComponents.Container>

              <Button
                type="submit"
                color="primary"
                size="primary"
                className="mt-10"
              >
                Login
              </Button>

              <ButtonGoogleLogin />

              <ButtonFacebookLogin/>

              <p>
                Not register yet ?
                <Link
                  to={"/register"}
                  className="ml-1 underline hover:text-black"
                  type="submit"
                >
                  Register
                </Link>
              </p>
            </FormComponents.Container>
          </FormComponents.Root>
        </form>
      </article>
    </section>
  );
};

export default Login;
