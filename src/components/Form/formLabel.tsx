import React, { ComponentProps } from "react";

type LabelProps = {
  children: React.ReactNode;
} & ComponentProps<"label">;

export const formLabel = ({ children, ...props }: LabelProps) => {
  return (
    <label {...props}>
      {children}
    </label>
  );
};