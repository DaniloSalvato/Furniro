import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FacebookAuth } from "../../../Auth/firebase";

import { Button } from "../../../components/Button/Button";

const ButtonFacebookLogin = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const redirectURL = searchParams.get("redirectURL") || "/home";

  async function handleFacebookLogin() {
    try {
      const result = await FacebookAuth();
      if (result) {
        const newUser = {
            uid: result.user.uid,
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
            accessToken: await result.user.getIdToken(),
        };

        localStorage.setItem("user", JSON.stringify(newUser));
        return navigate(redirectURL);
      }
    } catch (error) {
        alert(error);
    }
  }
  return (
    <Button
      className="flex justify-center items-center w-full gap-2"
      type="button"
      color="tertiary"
      size="primary"
      onClick={handleFacebookLogin}
    >
      <span className="flex flex-nowrap">Login with</span>
      <FaFacebookSquare className="size-5" />
    </Button>
  );
};

export default ButtonFacebookLogin;
