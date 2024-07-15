import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FacebookAuth } from "../../Auth/firebase";

const FacebookLogin = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate();
  const redirectURL = searchParams.get("redirectURL") || "/home" 

  async function handleFacebookLogin() {
    const auth = await FacebookAuth();
    if (auth) {
      const newUser = {
        name: auth.user.displayName || "",
        img: auth.user.photoURL || "",
        token: await auth.user.getIdToken(),
      };

      localStorage.setItem("user", JSON.stringify(newUser));
      return navigate(redirectURL);
    }
  }
  return (
    <button onClick={handleFacebookLogin}>
      <FaFacebookSquare />
    </button>
  );
};

export default FacebookLogin;
