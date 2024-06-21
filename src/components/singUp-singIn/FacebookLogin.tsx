import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FacebookAuth } from "../../Auth/firebase";

const FacebookLogin = () => {
  const navigate = useNavigate();

  async function handleFacebookLogin() {
    const auth = await FacebookAuth();
    if (auth) {
      const token = await auth.user.getIdToken();
      localStorage.setItem("accessToken", token);
      return navigate("/home");
    }
    // console.log("Facebook auth:" + auth);
  }
  return (
    <button onClick={handleFacebookLogin}>
      <FaFacebookSquare />
    </button>
  );
};

export default FacebookLogin;
