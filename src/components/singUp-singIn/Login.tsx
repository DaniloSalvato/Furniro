import { useState, FormEvent } from "react";
import { FirebaseError } from "firebase/app";
import signIn from "../../Auth/singIn";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleForm = async (event: FormEvent) => {
        event.preventDefault()
        try {
            const { result, error } = await signIn(email, password);

            if (error) {
                const firebaseError = error as FirebaseError;
                if (firebaseError.message) {
                    console.log(firebaseError.message);
                    throw new Error(firebaseError.message);
                } else {
                    console.log('Unknown Error:', firebaseError);
                    throw new Error('Unknown Error');
                }
            }

            console.log(result)
            return navigate("/");
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    return (
        <div>
            <section>
                <h1>SignIn</h1>
                <form onSubmit={handleForm}>
                    <label htmlFor="email">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                    </label>
                    <button type="submit">Sign In</button>
                    <button type="button" onClick={() => navigate("/signUp")}>Sign Up</button>
                </form>
            </section>
        </div>
    );
}

export default Login;