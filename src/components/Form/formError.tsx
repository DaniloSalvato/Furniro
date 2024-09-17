import React, { ComponentProps } from "react";

type ErrorProps = {
  children: React.ReactNode
} & ComponentProps<'span'>

export const formError = ({ className, children }: ErrorProps) => {
  return <span className={`text-red-500 text-xs mt-1 ${className}`}>{children}</span>;
};