import React from "react";
import signUp from "../../Auth/singUp";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    navigate("/signIn");
  };
  return (
    <div>
      <section>
        <h1>SignUp</h1>
        <form onSubmit={handleForm}>
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign Up</button>
          <button type="button" onClick={() => navigate("/signIn")}>
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
}

export default Register;
