import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../stores";

type PrivateRouterProps = {
  children: React.ReactNode;
  to?: string;
};

const PrivateRouter = ({ children, to }: PrivateRouterProps) => {
  const {user} = useAppSelector((state) => state.user);
  console.log(user);

  if (!user?.accessToken) return <Navigate to={to || "/login"} />;

  return <>{children}</>;
};

export default PrivateRouter;
