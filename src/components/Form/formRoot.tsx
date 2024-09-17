import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const formRoot = ({ children }: ContainerProps) => {
  return (
    <article className="flex flex-col w-full gap-4 justify-center items-center">
      {children}
    </article>
  );
};
