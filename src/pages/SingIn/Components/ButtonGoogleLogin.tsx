import { useNavigate, useSearchParams } from "react-router-dom";
import { GoogleAuth } from "../../../Auth/firebase";
import { FcGoogle } from "react-icons/fc";
import { setUser } from "../../../stores/slices/Users";
import { useAppDispatch } from "../../../stores";
import { Button } from "../../../components/Button/Button";


const ButtonGoogleLogin = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const redirectURL = searchParams.get("redirectURL") || "/home";
  
    async function handleGoogleLogin() {
      try {
        const result = await GoogleAuth();
  
        if (result) {
          const user = {
            uid: result.user.uid,
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
            accessToken: await result.user.getIdToken(),
          };
  
          dispatch(setUser(user));
          return navigate(redirectURL);
        }
      } catch (error) {
        alert(error);
      }
    }
    return (
      <Button className="flex justify-center items-center w-full gap-2" type="button" color="secondary" size="primary" onClick={handleGoogleLogin}>
        <span className="flex flex-nowrap">
          Login with
        </span>
        <FcGoogle className="size-5" />
      </Button>
    );
}

export default ButtonGoogleLogin