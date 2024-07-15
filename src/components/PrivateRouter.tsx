import React from "react";
import { Navigate } from "react-router-dom";

type PrivateRouterProps = {
  children: React.ReactNode;
  to?:string
};

const PrivateRouter = ({ children, to }: PrivateRouterProps) => {

    const user = JSON.parse(localStorage.getItem('user') || "{}")
        
    if(!user.token)return <Navigate to={to || "/login"} />

  return <>{children}</>;
};

export default PrivateRouter;
