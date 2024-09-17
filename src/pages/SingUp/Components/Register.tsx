import { FirebaseError } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";
import { CreateNewUser } from "../../../Auth/firebase";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, LoginSchema } from "../../../schemas/loginSchema";

import { Form as FormComponents } from "../../../components/Form";
import { Button } from "../../../components/Button/Button";
import { toast } from "react-toastify";

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
      const result = await CreateNewUser(data.email, data.password);

      if (result) {
        toast.success("Register with success!")
        navigate("/login");
      }

    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-email":
            setError("email", { type: "manual", message: "Invalid email" });
            break;
          case "auth/email-already-in-use":
            setError("email", {
              type: "manual",
              message: "Email already in use",
            });
            break;
          case "auth/weak-password":
            setError("password", {
              type: "manual",
              message: "Password is too weak",
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
          onSubmit={handleSubmit(handleRegisterForm)}
        >
          <FormComponents.Root>
            <FormComponents.Title>Register</FormComponents.Title>

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
                Register
              </Button>

              <Link
                to={"/Login"}
                className="ml-1 underline hover:text-black"
                type="submit"
              >
                Back to Login
              </Link>
            </FormComponents.Container>
          </FormComponents.Root>
        </form>
      </article>
    </section>
  );
};

export default Register;
