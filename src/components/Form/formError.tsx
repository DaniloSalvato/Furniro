import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const error = tv({
  base:"",
  variants:{
    variants:{
      primary:"text-red-500 text-xs mt-1"
      
    }
  },
  defaultVariants:{
    variants:"primary"
  }
})

type ErrorVariant = VariantProps<typeof error>

type ErrorProps = {
  children: React.ReactNode
} & ComponentProps<'span'> & ErrorVariant

export const formError = ({ variants, children }: ErrorProps) => {
  return <span className={error({variants})}>{children}</span>;
};