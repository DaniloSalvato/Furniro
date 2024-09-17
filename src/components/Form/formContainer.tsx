import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const formContainer = ({ children }: ContainerProps) => {
  return (
    <article className="flex flex-col w-full gap-2 px-10">
      {children}
    </article>
  );
};
