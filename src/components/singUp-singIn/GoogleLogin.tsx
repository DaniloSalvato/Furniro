import { useNavigate } from 'react-router-dom';
import { GoogleAuth } from '../../Auth/firebase'
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const navigate = useNavigate()

    async function handleGoogleLogin(){
      const auth = await GoogleAuth()

      if (auth) {
        const token = await auth.user.getIdToken();
        localStorage.setItem("accessToken", token);
        console.log(auth);
        return navigate("/home");
      }
      console.log("google auth:" + auth )
    }
  return (
    <div onClick={handleGoogleLogin}><FcGoogle /></div>
  )
}

export default GoogleLogin