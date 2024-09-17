import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

export const formTitle = ({ children }: TitleProps) => {
  return (
      <h1 className="flex justify-center w-full font-poppins font-bold text-4xl">
        {children}
      </h1>
  );
};
