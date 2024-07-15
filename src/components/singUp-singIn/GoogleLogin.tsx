import { useNavigate, useSearchParams } from "react-router-dom";
import { GoogleAuth } from "../../Auth/firebase";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate();
  const redirectURL = searchParams.get("redirectURL") || "/home" 

  async function handleGoogleLogin() {
    const auth = await GoogleAuth();

    if (auth) {
      const newUser = {
        name: auth.user.displayName || "",
        img: auth.user.photoURL || "",
        token: await auth.user.getIdToken(),
      };

      localStorage.setItem("user", JSON.stringify(newUser));
      // console.log(auth);
      return navigate(redirectURL);
    }
    // console.log("google auth:" + auth )
  }
  return (
    <div onClick={handleGoogleLogin}>
      <FcGoogle />
    </div>
  );
};

export default GoogleLogin;
