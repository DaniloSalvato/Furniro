import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function Page() {
  const { userAuth, logout } = useAuthContext();
  const navigate = useNavigate();

  console.log(userAuth);

  if (userAuth == null) {
    navigate("/signIn");
  }

  return (
    <>
      {userAuth && (
        <section>
          <h1>Only logged in users can view this page</h1>
          <button onClick={() => logout()}>Sign Out</button>
        </section>
      )}
    </>
  );
}

export default Page;
