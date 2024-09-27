import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const root = tv({
  base:"",
  variants:{
    variants:{
      primary:"flex flex-col w-full gap-7 justify-center items-center"
    }
  },
  defaultVariants:{
    variants:"primary"
  }
})

type RootVariants = VariantProps<typeof root>

type ContainerProps = {
  children: React.ReactNode;
} & RootVariants

export const formRoot = ({ children , variants }: ContainerProps) => {
  return (
    <article className={root({variants})}>
      {children}
    </article>
  );
};
